import api from 'constants/api'

export const authenticateUser = data => {
  console.log(data)
  return api.post('/api/auth', { data })
}

export const logOutUser = data => api.post('/api/auth/logout', { data })
