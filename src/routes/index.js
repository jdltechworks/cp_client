import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
// Components
import Login from 'forms/Login'
import Dashboard from 'containers/Dashboard'
import Manager from 'containers/Manager'
import Projects from 'containers/Projects'
import Inventory from 'containers/Inventory'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <Login />} />
    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    <Route exact path="/inventory/:section?/:subsection?" component={Inventory} />
    <Route exact path="/project/:section?/:subsection?" component={Projects} />
    <Route exact path="/manage/:section?" component={Manager} />
  </Switch>
)

export default Routes