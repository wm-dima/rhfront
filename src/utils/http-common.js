import axios from 'axios'
import { getAccessToken } from './auth-fn'
// import Loading from 'src/pages/Dashboard/Layout/LoadingMainPanel.vue'

function getAPIRoot () {
  let p = window.location.protocol
  let h = window.location.hostname
  return  p + '//' + h
}

export const HTTP = axios.create({
  baseURL: getAPIRoot(),
  timeout: 30000,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`
  }
})

// before aapi/auth/savestate request is made start the nprogress
/*
HTTP.interceptors.request.use(config => {
    //  Loading.service({})
    return config
})

  // before a response is returned stop nprogress
HTTP.interceptors.response.use(response => {
    //  Loading.close()
    return response
})
*/
