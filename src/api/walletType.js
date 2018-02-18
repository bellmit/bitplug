import { blackAxios } from '@/config'
import { getAll, getById } from './generic'

export default {
  resource: {
    getWalletType: '/admin/wallet_types',
    platformWallet: '/admin/wallets'
  },

  getWalletType (dargs) {
    /**
     * Retrieve authenticated user object
     */
    return blackAxios.get(this.resource.getWalletType, {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return getAll.success({
          response: response,
          resource: 'data' // Resource is the first element of array
        })
      })
      .catch(function (error) {
        return getAll.error({
          error: error,
          defaultmsg: ''
        })
      })
  },
  getPlatformWallet (dargs) {
    /**
     * Retrieve authenticated user object
     */
    return blackAxios.get(this.resource.platformWallet, {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return getAll.success({
          response: response,
          resource: 'data' // Resource is the first element of array
        })
      })
      .catch(function (error) {
        return getAll.error({
          error: error,
          defaultmsg: ''
        })
      })
  },
  getWalletById (dargs) {
    /**
     * Retrieve authenticated user object
     */
    return blackAxios.get(this.resource.getWalletType + `/${dargs.id}`, {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        console.log('api response', response)
        return getById.success({
          response: response,
          resource: 'data' // Resource is the first element of array
        })
      })
      .catch(function (error) {
        return getById.error({
          error: error,
          defaultmsg: ''
        })
      })
  },
  editWalletType (dargs) {
    /**
     * Retrieve authenticated user object
     */
    const tired = {
      title: dargs.title,
      currency: dargs.currency,
      initial_balance: dargs.initial_balance,
      fee_id: dargs.fee_id,
      actions: dargs.actions
    }
    return blackAxios.put(this.resource.getWalletType + `/${dargs.id}`, tired, {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return getById.success({
          response: response,
          resource: 'data' // Resource is the first element of array
        })
      })
      .catch(function (error) {
        return getById.error({
          error: error,
          defaultmsg: ''
        })
      })
  }
}
