import Api from './Api'



export default {
  register(credentials) {
    return Api().post('/auth/signup', credentials)
  },
  login (credentials) {
    return Api().post('/auth/login',credentials)
  }
}