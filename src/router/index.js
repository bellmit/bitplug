import Vue from 'vue'
import Router from 'vue-router'

// Generic

// Flat
import FlatLayout from '@/components/layouts/flat/Layouts'
import LandingPage from '@/components/home/LandingPage'
import Login from '@/components/Login'
import SignUp from '@/components/Signup'

// User dashboard
import UserDashboard from '@/components/layouts/dashboard/Dashboard'
import UserDashboardHome from '@/components/home/Home'
import UserProfileLayout from '@/components/profile/Profile'
import UserWallets from '@/components/wallet/Wallets'
import UserWalletDetails from '@/components/wallet/WalletDetails'
import UserTransactions from '@/components/transactions/Transactions'
import UserOrders from '@/components/orders/Orders'
import UserPriceAlerts from '@/components/priceAlerts/PriceAlerts'
import UserSettings from '@/components/settings/Settings'

// Admin dashboard
import AdminDashboard from '@/components/layouts/dashboard/AdminDashboard'
import AdminDashboardHome from '@/components/home/AdminHome'
import AdminWalletTypes from '@/components/wallet/WalletTypes'
import CreateWalletType from '@/components/wallet/forms/CreateWalletType'
import EditWalletType from '@/components/wallet/forms/EditWalletType'
import AdminTransactions from '@/components/transactions/AdminTransactions'
import AdminMarkets from '@/components/markets/Markets'
import AdminFees from '@/components/fees/AdminFees'
import FeesAndFeature from '@/components/fees/FeesAndFeature'
import WithdrawalRequests from '@/components/wallet/WithdrawalRequests'

import OrderBook from '@/components/orders/OrderBook'
import Exchange from '@/components/exchange/Exchange'
import HelpCenter from '@/components/helpCenter/HelpCenter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // Flat pages
    {
      path: '/',
      component: FlatLayout,
      // redirect: '/dashboard/profile',
      children: [
        {
          path: '/',
          name: 'home',
          component: LandingPage
        },
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
          component: FeesAndFeature
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
          path: 'wallet/:id',
          name: 'walletDetails',
          component: UserWalletDetails
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
        // {
        //   path: 'price_alerts',
        //   name: 'price_alerts',
        //   component: UserPriceAlerts
        // },
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
      component: AdminDashboard,
      redirect: '/admin/home',
      children: [
        {
          path: 'home',
          name: 'admin-dashboard',
          component: AdminDashboardHome
        },
        {
          path: 'profile',
          name: 'admin-profile',
          component: UserProfileLayout
        },
        {
          path: 'wallet',
          name: 'admin-wallet-types',
          component: AdminWalletTypes
        },
        {
          path: 'edit_wallet/:walletId',
          name: 'edit-wallet-type',
          component: EditWalletType
        },
        {
          path: 'create_wallet',
          name: 'create-wallet-type',
          component: CreateWalletType
        },
        {
          path: 'transactions',
          name: 'admin-transactions',
          component: AdminTransactions
        },
        {
          path: 'withdrawal_requests',
          name: 'admin-withdrawal-requests',
          component: WithdrawalRequests
        },
        {
          path: 'markets',
          name: 'admin-markets',
          component: AdminMarkets
        },
        {
          path: 'order_book',
          name: 'admin-order-book',
          component: OrderBook
        },
        {
          path: 'fees',
          name: 'admin-fees',
          component: AdminFees
        },
        {
          path: 'settings',
          name: 'admin-settings',
          component: UserSettings
        }
      ]
    }

  ]
})

export default router
