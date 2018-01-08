<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <router-link to="" class="navbar-brand">
          {{ routeName }}
        </router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
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
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(this.cleanString(name))
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        let strings = string.split(' ')

        return strings.map((string) => {
          return string.charAt(0).toUpperCase() + string.slice(1)
        }).join(' ')
      },
      cleanString (string) {
        return string.split('_').join(' ').split('-').join(' ')
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
