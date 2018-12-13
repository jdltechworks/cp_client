import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, compose } from 'redux'

import rootSaga from 'sagas'
import reducers from 'reducers'
import isDevelop from 'utils/isDevelop'
import chromeExtComposer from 'utils/chromeExtComposer'


const sagaMiddleware = createSagaMiddleware()

let middlewares = [
  sagaMiddleware
]

const composer = isDevelop ? chromeExtComposer : compose

const composeStore = composer(
  applyMiddleware(...middlewares),
)(createStore)

const store = composeStore(reducers)
sagaMiddleware.run(rootSaga)

export default store
