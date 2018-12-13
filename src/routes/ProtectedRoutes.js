import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'


import Inventory from 'containers/Inventory'
import Projects from 'containers/Projects'
import Dashboard from 'containers/Dashboard'
import Manager from 'containers/Manager'

const ProtectedRoutes = ({ isAuthenticated, ...rest }) => (
  <Fragment>
    <Route exact path="/dashboard" render={(props) => isAuthenticated ? <Dashboard {...props} /> : <Redirect to="/" />} />
    <Route exact path="/inventory/:section?/:subsection?" component={Inventory} />
    <Route exact path="/project/:section?/:subsection?" component={Projects} />
    <Route exact path="/manage/:section?" component={Manager} />
  </Fragment>
)
export default ProtectedRoutes