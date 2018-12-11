import modules from 'modules'
import rootSaga from 'sagas'

const { reducers, initialState } = modules

const sagaMiddleware = createSagaMiddleware()

let middlewares = [
  sagaMiddleware
]

const setComposer = (composer) => composer ? componser : compose

export default (composer => {

  const create = setComposer(composer)

  const composeStore = create(
      applyMiddleware(...middlewares),
  )(createStore)

  const store = composeStore(reducers, initialState)
  sagaMiddleware.run(rootSaga)
  return store
})