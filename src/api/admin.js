import { blackAxios } from '@/config'
import { getAll, getById, add, edit, gDelete } from './generic'

export default {
  resource: {
    getFee: '/admin/fees',
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

}
