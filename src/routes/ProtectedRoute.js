import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const ProtectedRoute = ({component: ComposedComponent, authenticated, ...rest}) => {
  return (
    <Route {...rest}
    render={() => !authenticated ? <Redirect push strict={true} to='/' /> : <ComposedComponent /> } />
  )
}
  

ProtectedRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired
}

ProtectedRoute.defaultProps = {
  authenticated: false
}

const mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated })

export default connect(mapStateToProps)(ProtectedRoute)