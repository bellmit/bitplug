import { blackAxios } from '@/config'
import { authErrMsg, isAuthErr, isBadReq, isVerificationErr, print } from '@/helpers'
import { getAll, getById, add, edit, gDelete } from './generic'

// const blackAxios = config.blackAxios

export default {
  resource: {
    user: 'auth/session',
    updateProfile: 'auth/user_update',
    updatePassword: 'auth/user_update'
  },

  getUser (dargs) {
    /**
     * Retrieve authenticated user object
     */
    return blackAxios.get(this.resource.user, {
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
  },

  updatePassword (dargs) {
    /**
     * Update user password
     */
    return blackAxios.patch(this.resource.updatePassword, {
      old_password: dargs.old_password, // user current password
      new_password: dargs.new_password // new password
    },
    {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return add.success({
          response: response,
          resource: ''
        })
      })
      .catch(function (error) {
        return add.error({
          error: error,
          defaultmsg: ''
        })
      })
  },

  updateProfile (dargs) {
    /**
     * Update user profile
     * only with fields to be updated
     */
    return blackAxios.put(this.resource.updateProfile, {
      first_name: dargs.first_name,
      last_name: dargs.last_name,
      email: dargs.email,
      phone: dargs.phone
    },
    {
      'headers': {
        'Authorization': 'Bearer ' + dargs.token
      }
    })
      .then(function (response) {
        return add.success({
          response: response,
          resource: 'data'
        })
      })
      .catch(function (error) {
        return add.error({
          error: error,
          defaultmsg: ''
        })
      })
  },
}
