<template>
    <span class="vue-paper">
        <div :class="{'nav-open': $sidebar.showSidebar}">
            <DashboardLayout/>
            <!--This sidebar appears only for screens smaller than 992px-->
            <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
            </side-bar>
        </div>
    </span>
</template>

<script>

import DashboardLayout from './DashboardLayout.vue'

export default {
    name: 'dashboard',
    components: {
        DashboardLayout,
    }
}

</script>

<style lang="scss">
    
</style>
