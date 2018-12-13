import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Inventory from 'containers/Inventory'
import Projects from 'containers/Projects'
import Dashboard from 'containers/Dashboard'
import Manager from 'containers/Manager'

const ProtectedRoutes = ({ isAuthenticated }) => (
  <Fragment>
    {isAuthenticated ? (
      <Fragment>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/inventory/:section?/:subsection?" component={Inventory} />
        <Route exact path="/project/:section?/:subsection?" component={Projects} />
        <Route exact path="/manage/:section?" component={Manager} />
      </Fragment>) : 
      (<Redirect to="/" />)}
  </Fragment>
)

ProtectedRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

export default ProtectedRoutes