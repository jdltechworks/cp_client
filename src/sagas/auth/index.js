import Cookies from 'js-cookie'
import * as types from 'actions/Auth/types'
import { authenticateUser } from 'services/Auth'
import { call, takeLatest, put } from 'redux-saga/effects'

function* Login({ payload }) {
  
  try {
    const { data } = yield call(
      authenticateUser,
      { ...payload }
    )
    
    const authToken = Cookies.set('user_token', data.key, { expires: 7 })


    yield put({
      type: types.AUTHENTICATED,
      authenticated: true,
      authToken
    })

  } catch ({ response }) {
    console.log(response.data)
  }

}

export function* checkAuth() {
  const token = Cookies.get('user_token')
  
  yield token && put({
    type: types.AUTHENTICATED,
    authenticated: true,
    authToken: token.key
  })

}

export default function* authSaga() {
  yield takeLatest(types.AUTHENTICATING, Login)
}