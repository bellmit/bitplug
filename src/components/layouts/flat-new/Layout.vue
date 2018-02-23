<template>
    <span class="flat-view">
        <div :class="{'nav-open': $sidebar.showSidebar, 'flat-sidebar-open': $sidebar.showFlatSidebar}">
            <DashboardLayout/>
          <!--This sidebar appears only for screens smaller than 992px-->
              <side-bar v-if="!isAuth" type="navbar" :sidebar-links="$sidebar.flatSidebarLinks">
                <ul class="nav navbar-nav">
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
                  <li class="divider"></li>
                </ul>
              </side-bar>

              <side-bar v-else type="navbar" :sidebar-links="$sidebar.sidebarLinks">
                <ul class="nav navbar-nav">
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
                    <li class="divider"></li>
                </ul>
            </side-bar>

        </div>
    </span>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import DashboardLayout from './DashboardLayout.vue'

  export default {
    name: 'flat-dashboard',
    components: {
      DashboardLayout,
    },
    mounted () {
      this.$sidebar.displaySidebar(false)
    },
    computed: {
      ...mapGetters('userCredentials', [
        'isAuth'
      ])
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
    }
  }

</script>

<style lang="scss">

</style>
