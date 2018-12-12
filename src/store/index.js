import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import isDevelop from 'utils/isDevelop'
import browserComposer from 'utils/browserComposer'

import rootSaga from 'sagas'
import reducers from 'reducers'

const sagaMiddleware = createSagaMiddleware()

let middlewares = [
  sagaMiddleware
]

const composer = isDevelop ? browserComposer : compose

const composeStore = composer(
  applyMiddleware(...middlewares),
)(createStore)

const store = composeStore(reducers)
sagaMiddleware.run(rootSaga)

export default store
