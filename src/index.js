import React from 'react'
import { render } from 'react-dom'
import './assets/sass/index.scss'
import ClientProvider from './providers/ClientProvider'
import * as serviceWorker from './serviceWorker'
import { registerObserver } from 'react-perf-devtool'
import isDevelop from 'utils/isDevelop'

isDevelop && registerObserver() 

render(<ClientProvider />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
