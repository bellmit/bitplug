<template>
  <div class="wrapper">
    <side-bar v-if="!isAuth" type="sidebar" :sidebar-links="$sidebar.flatSidebarLinks">

    </side-bar>
    <side-bar v-else type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <notifications>

    </notifications>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import { mapGetters } from 'vuex'
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from '../ContentFooter.vue'
  import DashboardContent from './Content.vue'
  export default {
    data () {
      return {
        auth:false
      }
    },
    computed: {
      ...mapGetters('userCredentials', [
        'isAuth'
      ])
    },
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }

  }

</script>
