<template>
  <nav class="navbar navbar-default" :class="{'navbar-float': stickyNav }">
    <div class="">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <i class="navbar-brand more-icon" :class="{'ti-close': $sidebar.showFlatSidebar, 'ti-menu': !$sidebar.showFlatSidebar}" @click.prevent="toggleSidebarNav"></i>
        <router-link to="" class="navbar-brand">
          BITPLUG
        </router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul v-if="!isAuth" class="nav navbar-nav navbar-right">
             <!-- <drop-down title="5 Notifications" icon="ti-bell">
               <li><a href="#">Notification 1</a></li>
               <li><a href="#">Notification 2</a></li>
               <li><a href="#">Notification 3</a></li>
               <li><a href="#">Notification 4</a></li>
               <li><a href="#">Another notification</a></li>
             </drop-down> -->
          <li>
            <router-link :to="{ name: 'user-dashboard'}" class="btn-rotate">
              <!-- <i class="ti-settings"></i> -->
              <p>
                FakeLogin
              </p>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'login'}" class="btn-rotate">
              <!-- <i class="ti-settings"></i> -->
              <p>
                Sign in
              </p>
            </router-link>
          </li>
          <li class="open">
            <router-link :to="{ name: 'signup'}" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <!-- <i class="ti-help-alt"></i> -->
              <p>Sign up</p>
            </router-link>
          </li>
        </ul>

        <ul v-else class="nav navbar-nav navbar-right">
          <!-- <drop-down title="5 Notifications" icon="ti-bell">
            <li><a href="#">Notification 1</a></li>
            <li><a href="#">Notification 2</a></li>
            <li><a href="#">Notification 3</a></li>
            <li><a href="#">Notification 4</a></li>
            <li><a href="#">Another notification</a></li>
          </drop-down> -->
          <li class="open">
            <router-link :to="{ name: 'profile'}" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-user"></i>
              <p>Profile</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'settings'}" class="btn-rotate">
              <i class="ti-settings"></i>
              <p>
                Settings
              </p>
            </router-link>
          </li>
          <li>
            <a @click.prevent="logoutUser" class="btn-rotate">
              <i class="ti-shift-left"></i>
              <p>
                Logout
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    routeName () {
      const {name} = this.$route
      return this.capitalizeFirstLetter(this.cleanString(name))
    },
    ...mapGetters('userCredentials', [
      'isAuth'
    ])
  },
  data () {
    return {
      activeNotifications: false,
      isSidebarOpen: false,
      stickyNav: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions('userCredentials', [
      'logout',
      'callWithToken',
    ]),
    logoutUser() {
      /**
       * Logout the user and redirect to login page
       */

      const self = this
      this.logout()
        .then( status => {
          // Redirect to login page
          self.$_$redirectLoginNoBack()
        })
    },
    handleScroll () {
      if (window.scrollY >= 60) {
        this.stickyNav = true
      } else {
        this.stickyNav = false
      }
    },
    capitalizeFirstLetter (string) {
      let strings = string.split(' ')

      return strings.map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }).join(' ')
    },
    cleanString (string) {
      return string.split('_').join(' ').split('-').join(' ')
    },
    toggleSidebarNav () {
      this.$sidebar.displayFlatSidebar(!this.$sidebar.showFlatSidebar)
    },
    toggleNotificationDropDown () {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown () {
      this.activeNotifications = false
    },
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar () {
      this.$sidebar.displaySidebar(false)
    }
  }
}
</script>
<style>

</style>
