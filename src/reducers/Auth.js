import { handleActions } from 'redux-actions'
import * as types from 'actions/Auth/types'

export const initialState = {
  authenticated: false,
}

const authReducer = handleActions(
  {
    [types.AUTHENTICATED](state, { authenticated, authToken }) {
      return {
        ...state,
        authenticated,
        authToken,
      }
    },
  },
  initialState,
)

export default authReducer