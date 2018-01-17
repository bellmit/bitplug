<template>
    <span class="flat-view">
        <div :class="{'nav-open': $sidebar.showSidebar, 'flat-sidebar-open': $sidebar.showFlatSidebar}">
            <DashboardLayout/>
            <!--This sidebar appears only for screens smaller than 992px-->
            <side-bar type="navbar" :sidebar-links="$sidebar.flatSidebarLinks">
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
    }
}

</script>

<style lang="scss">
    
</style>
