import React from 'react'
import { Provider } from 'react-redux'
import App from 'containers/App'
import { BrowserRouter as Router } from 'react-router-dom'
import createStore from 'store'
import Routes from 'routes'
import isDevelop from 'utils/isDevelop'
import browserComposer from 'utils/browserComposer'

const composer = (() => {
    if(isDevelop) return browserComposer

    return null
})

const store = createStore(composer)

const Client = (props) => (
    <Provider store={store}>
        <Router>
            <App>{(values) => (<Routes />)}
            </App>
        </Router>
    </Provider>
)

export default Client