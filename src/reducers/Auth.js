import { handleActions } from 'redux-actions'
import * as types from 'actions/Auth/types'

export const initialState = {
  authenticated: false,
}

const authReducer = handleActions(
  {
    [types.AUTHENTICATING](state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
  },
  initialState,
);

export default authReducer