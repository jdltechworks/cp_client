import React from 'react'
import PrivateRoute from './PrivateRoute'
import { Route, Switch } from 'react-router-dom'

// Components
import Login from 'forms/Login'
import Dashboard from 'containers/Dashboard'
import Manager from 'containers/Manager'
import Projects from 'containers/Projects'
import Inventory from 'containers/Inventory'

const Routes = (authenticated) => (
  <Switch>
    <Route exact path="/" component={() => <Login />} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/inventory/:section?/:subsection?" component={Inventory} />
    <PrivateRoute exact path="/project/:section?/:subsection?" component={Projects} />
    <PrivateRoute exact path="/manage/:section?" component={Manager} />
  </Switch>
)

export default Routes