import { blackAxios } from '@/config'
import { postErrMsg, print } from '@/helpers'

// const blackAxios = config.blackAxios

export default {
  res: 'auth/register',

  register (dargs) {
    return blackAxios.post(this.res, {
      first_name: dargs.first_name,
      last_name: dargs.last_name,
      email: dargs.email,
      phone: dargs.phone,
      password: dargs.password,
      type: dargs.type
    })
      .then(function (response) {
        print(response)

        print('Registration Completed: ', response)
        let result = {
          data: response.data,
          msg: response.msg
        }

        return result
      })
      .catch(function (error) {
        let result = {}
        let errMsg = 'Registration failed. ' + error.message
        let customEMsg

        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          print(error.response.data, error.response.status)

          // Custom Status msgs by status code
          customEMsg = postErrMsg(error.response.status, error.message)
          errMsg = 'Registration failed. ' + customEMsg

          print(errMsg)

          result = {
            error: errMsg,
            data: error.response.data
          }
        } else {
          result.error = errMsg
        }

        return result
      })
  }
}
