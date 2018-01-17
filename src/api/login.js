import { blackAxios } from '@/config'
import { authErrMsg, isAuthErr, isBadReq, isVerificationErr, print } from '@/helpers'
import { getById } from './generic'

// const blackAxios = config.blackAxios

export default {
  res: 'auth/login',
  resUser: 'auth/session',
  resOut: 'auth/logout',

  login (dargs) {
    return blackAxios.post(this.res, {
      email: dargs.email,
      password: dargs.password
    })
      .then(function (response) {
        print('Login Completed: ', response)

        const responseData = response.data

        let result = {
          data: responseData,
          userType: responseData.type,
          token: responseData.token
        }

        return result
      })
      .catch(function (error) {
        let result = {}
        let errMsg = 'Login failed. ' + error.message
        let customEMsg

        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          let statusCode = error.response.status
          print(error.response.data, statusCode)

          // Custom Status msgs by status code
          customEMsg = authErrMsg(statusCode, error.message)
          errMsg = 'Login failed. ' + customEMsg

          result.autherror = isBadReq(statusCode)
          result.error = errMsg
          result.data = error.response.data
        } else {
          result.error = errMsg
        }

        return result
      })
  }
}
