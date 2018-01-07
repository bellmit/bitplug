import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-home',
      path: '/dashboard'
    },
    {
      name: 'Wallets',
      icon: 'ti-wallet',
      path: '/dashboard/wallet'
    },
    {
      name: 'Orders',
      icon: 'ti-receipt',
      path: '/dashboard/orders'
    },
    {
      name: 'Transactions',
      icon: 'ti-view-list-alt',
      path: '/dashboard/transactions'
    },
    {
      name: 'Exchange',
      icon: 'ti-stats-up',
      path: '/dashboard/exchange'
    },
    {
      name: 'Markets',
      icon: 'ti-shopping-cart',
      path: '/dashboard/markets'
    },
    {
      name: 'Price Alerts',
      icon: 'ti-alarm-clock',
      path: '/dashboard/price_alerts'
    }
  ],
  adminSidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-home',
      path: '/dashboard'
    },
    {
      name: 'Wallets',
      icon: 'ti-wallet',
      path: '/dashboard/wallet'
    },
    {
      name: 'Orders',
      icon: 'ti-view-list-alt',
      path: '/dashboard/orders'
    },
    {
      name: 'Transactions',
      icon: 'ti-view-list-alt',
      path: '/dashboard/transactions'
    },
    {
      name: 'Exchange',
      icon: 'ti-stats-up',
      path: '/dashboard/exchange'
    },
    {
      name: 'Markets',
      icon: 'ti-shopping-cart',
      path: '/dashboard/markets'
    },
    {
      name: 'Price Alerts',
      icon: 'ti-alarm-clock',
      path: '/dashboard/price_alerts'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
