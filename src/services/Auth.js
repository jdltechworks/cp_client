import api from 'constants/api'

export const authenticateUser = data => api.post('auth/login/', { ...data })

export const logOutUser = data => api.post('auth/logout', { data })
