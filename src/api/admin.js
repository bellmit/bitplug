import { blackAxios } from '@/config'
import { getAll, getById, add, edit, gDelete } from './generic'

export default {
  resource: {
    getFee: '/admin/fees',
    getPlatformBank: '/admin/bank_accounts',
    getAllBanks: '/admin/banks',
  },

  getFee(dargs) {
    /**
     * Retrieve authenticated user object
     */
    return blackAxios.get(this.resource.getFee, {
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
  getPlatformBanks (dargs) {
    /**
     * Retrieve authenticated user object
     */
    return blackAxios.get(this.resource.getPlatformBank, {
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
  getAllBanks (dargs) {
    /**
     * Retrieve authenticated user object
     */
    return blackAxios.get(this.resource.getAllBanks, {
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
}
