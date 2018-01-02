import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// User dashboard
import UserDashboard from '@/components/layout/Dashboard'
import UserProfileLayout from '@/components/profile/Profile'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // Flat pages
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
      children: [
        {
          path: 'signup',
          name: 'signup',
          component: HelloWorld
        },
        {
          path: 'login',
          name: 'login',
          component: HelloWorld
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
          component: UserProfileLayout
        },
        {
          path: 'profile',
          name: 'profile',
          component: UserProfileLayout
        },
        {
          path: 'wallet',
          name: 'wallet',
          component: UserProfileLayout
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: UserProfileLayout
        },
        {
          path: 'exchange',
          name: 'exchange',
          component: UserProfileLayout
        },
        {
          path: 'price_alerts',
          name: 'price_alerts',
          component: UserProfileLayout
        },
        {
          path: 'settings',
          name: 'settings',
          component: UserProfileLayout
        },
        {
          path: 'help',
          name: 'help',
          component: UserProfileLayout
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
