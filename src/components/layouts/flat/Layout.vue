<template>
    <span class="flat-view">
        <div :class="{'nav-open': $sidebar.showSidebar, 'flat-sidebar-open': $sidebar.showFlatSidebar}">
            <DashboardLayout/>
            <!--This sidebar appears only for screens smaller than 992px-->
            <side-bar type="navbar" :sidebar-links="$sidebar.flatSidebarLinks">
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
        </div>
    </span>
</template>

<script>

import DashboardLayout from './DashboardLayout.vue'

export default {
    name: 'flat-dashboard',
    components: {
        DashboardLayout,
    },
    mounted () {
        this.$sidebar.displaySidebar(false)
    },
}

</script>

<style lang="scss">
    
</style>
