<template>
    <span class="">
        <div :class="{'nav-open': $sidebar.showSidebar}">
            <DashboardLayout/>
            <!--This sidebar appears only for screens smaller than 992px-->
            <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
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

import DashboardLayout from './DashboardLayout.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'dashboard',
    components: {
        DashboardLayout,
    },
    mounted () {
        this.$sidebar.displaySidebar(false)
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
