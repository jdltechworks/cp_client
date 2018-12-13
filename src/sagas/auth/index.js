import { call, takeLatest, put } from 'redux-saga/effects'
import * as types from 'actions/Auth/types'
import { authenticateUser } from 'services/Auth'

function* Login({ payload }) {
  try {
    const authResponse = yield call(authenticateUser, { ...payload })
    console.log(authResponse)
    yield put({ type: types.AUTHENTICATED, authenticated: true })
  } catch ({ response }) {
    console.log(response)
  }
}

export default function* authSaga() {
  yield takeLatest(types.AUTHENTICATING, Login)
}