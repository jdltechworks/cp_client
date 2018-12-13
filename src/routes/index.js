import React from 'react'
import PropTypes from 'prop-types'
import ProtectedRoutes from './ProtectedRoutes'
import { Route, Switch, Redirect } from 'react-router-dom'

// Components
import Login from 'forms/Login'

const Routes = ({ isAuthenticated }) => (
  <Switch>
    <Route exact path="/" render={() => (
      isAuthenticated ? <Redirect to="/dashboard" /> : <Login />
    )} />
    <ProtectedRoutes isAuthenticated={isAuthenticated} />
  </Switch>
)

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

export default Routes