import Vue from 'vue'
import Router from 'vue-router'

// Generic

// Flat
import FlatLayout from '@/components/layouts/flat/Layout'
import Login from '@/components/Login'
import SignUp from '@/components/Signup'

// User dashboard
import UserDashboard from '@/components/layouts/dashboard/Dashboard'
import UserDashboardHome from '@/components/home/Home'
import UserProfileLayout from '@/components/profile/Profile'
import UserWallets from '@/components/wallet/Wallets'
import UserTransactions from '@/components/transactions/Transactions'
import UserOrders from '@/components/orders/Orders'
import UserPriceAlerts from '@/components/priceAlerts/PriceAlerts'
import UserSettings from '@/components/settings/Settings'

import Exchange from '@/components/exchange/Exchange'
import HelpCenter from '@/components/helpCenter/HelpCenter'
import Markets from '@/components/markets/Markets'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // Flat pages
    {
      path: '/',
      name: 'home',
      component: FlatLayout,
      redirect: '/dashboard/profile',
      children: [
        {
          path: 'signup',
          name: 'signup',
          component: SignUp
        },
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'exchange',
          name: 'exchange',
          component: Exchange
        },
        {
          path: 'help-center',
          name: 'help',
          component: HelpCenter
        },
        {
          path: 'fees',
          name: 'fees',
          component: HelpCenter
        }
      ]
    },

    // User Dashboard Route
    {
      path: '/dashboard',
      component: UserDashboard,
      redirect: '/dashboard/home',
      children: [
        {
          path: 'home',
          name: 'user-dashboard',
          component: UserDashboardHome
        },
        {
          path: 'profile',
          name: 'profile',
          component: UserProfileLayout
        },
        {
          path: 'wallet',
          name: 'wallet',
          component: UserWallets
        },
        {
          path: 'orders',
          name: 'orders',
          component: UserOrders
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: UserTransactions
        },
        {
          path: 'exchange',
          name: 'exchange',
          component: Exchange
        },
        {
          path: 'price_alerts',
          name: 'price_alerts',
          component: UserPriceAlerts
        },
        {
          path: 'settings',
          name: 'settings',
          component: UserSettings
        }
      ]
    },

    // Admin Dashboard Route
    {
      path: '/admin',
      component: UserDashboard,
      redirect: '/admin/home',
      children: [
        {
          path: 'home',
          name: 'admin-dashboard',
          component: UserProfileLayout
        },
        {
          path: 'profile',
          name: 'admin-profile',
          component: UserProfileLayout
        },
        {
          path: 'wallet',
          name: 'admin-wallet',
          component: UserProfileLayout
        },
        {
          path: 'transactions',
          name: 'admin-transactions',
          component: UserProfileLayout
        },
        {
          path: 'exchange',
          name: 'admin-exchange',
          component: UserProfileLayout
        },
        {
          path: 'price_alerts',
          name: 'admin-price-alerts',
          component: UserProfileLayout
        },
        {
          path: 'settings',
          name: 'admin-settings',
          component: UserProfileLayout
        },
        {
          path: 'help',
          name: 'admin-help',
          component: UserProfileLayout
        }
      ]
    }

  ]
})

export default router
