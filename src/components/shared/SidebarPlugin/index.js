import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  showFlatSidebar: false,
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
    }
    // {
    //   name: 'Price Alerts',
    //   icon: 'ti-alarm-clock',
    //   path: '/dashboard/price_alerts'
    // }
  ],
  adminSidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-home',
      path: '/admin'
    },
    {
      name: 'Wallet Types',
      icon: 'ti-wallet',
      path: '/admin/wallet'
    },
    {
      name: 'Withdrawal Requests',
      icon: 'ti-view-list-alt',
      path: '/admin/withdrawal_requests'
    },
    {
      name: 'Markets',
      icon: 'ti-shopping-cart',
      path: '/admin/markets'
    },
    {
      name: 'Transactions',
      icon: 'ti-view-list-alt',
      path: '/admin/transactions'
    },
    {
      name: 'Order Book',
      icon: 'ti-stats-up',
      path: '/admin/order_book'
    }
  ],
  flatSidebarLinks: [
    {
      name: 'Exchange',
      icon: 'ti-stats-up',
      path: '/exchange'
    },
    {
      name: 'Fees & Features',
      icon: 'ti-money',
      path: '/fees'
    },
    {
      name: 'Help Center',
      icon: 'ti-help-alt',
      path: '/help-center'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  },
  displayFlatSidebar (value) {
    this.showFlatSidebar = value
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
