import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: ComposedComponent, ...rest}) => {

  class Authentication extends Component {
    
    handleRender(props) {
      if (!this.props.authenticated) {
        return <Redirect to={{
          pathname: '/',
          state: {
            from: props.location,
            message: 'You need to sign in'
          }
        }}/>
      } else {
        return <ComposedComponent {...props}/>
      }
    }

    render() {
      return (
        <Route {...rest} render={this.handleRender.bind(this)}/>
      )
    }
  }

  const mapStateToProps = ({ auth }) => ({
    authenticated: auth.authenticated
  })

  const AuthenticationContainer = connect(mapStateToProps)(Authentication)
  return <AuthenticationContainer/>
}

export default PrivateRoute