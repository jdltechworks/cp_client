import React from 'react'
import { Provider } from 'react-redux'
import App from 'containers/App'
import { BrowserRouter as Router } from 'react-router-dom'
import store from 'store'
import Routes from 'routes'

const Client = () => (
  <Provider store={store}>
    <Router>
      <App>
        {authenticated => <Routes authenticated={authenticated}/>}
      </App>
    </Router>
  </Provider>
)

export default Client