import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './Auth'

export default combineReducers({
  auth,
  form,
})
