import axios from 'axios'

export const login = user => {
  return axios
    .post('/user/nuevo-user', {
        username: user.username,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
