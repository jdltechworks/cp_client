import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from 'forms/Login'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default Routes