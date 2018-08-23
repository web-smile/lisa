import * as http from '@/utils/http'

const login = (userInfo) => {
  return http.post('/auth/login', userInfo)
}
const register = (userInfo) => {
  return http.post('/auth/register', userInfo)
}
const logout = () => {
  return http.get('/auth/logout')
}

// module.exports = {
//   login, register, logout
// }
export  {
  login, register, logout
}
