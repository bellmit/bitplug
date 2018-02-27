import axios from 'axios'

export const API = 'http://bitplug.ng:8080/'
// export const API = 'http://localhost:5000/'

export var HOST = 'http://127.0.0.1:8080/#/'
export var blackAxios = axios.create({
  baseURL: API
})

// module.exports = {
//     API: API,
//     blackAxios: defAxios,
// }
