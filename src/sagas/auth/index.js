import { call, takeLatest, put } from 'redux-saga/effects'
import * as types from 'actions/Auth/types'
import { authenticateUser } from 'services/Auth'

function* Login({ payload }) {
  try {
    const { data } = yield call(
      authenticateUser,
      { ...payload }
    )
    yield put({
      type: types.AUTHENTICATED,
      authenticated: true,
      authToken: data.key
    })
  } catch ({ response }) {
    console.log(response.data)
  }
}

export default function* authSaga() {
  yield takeLatest(types.AUTHENTICATING, Login)
}