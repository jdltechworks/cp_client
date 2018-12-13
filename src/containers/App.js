import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Body from 'components/ui/wrapper/Body'
import Navbar from 'components/ui/header/Navbar'

const App = ({ children, authenticated, }) => (
  <Body>
    <Navbar />
    <div className="main">
      {children(authenticated)}
    </div>
  </Body>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
  isAuthenticated: PropTypes.bool
}

export default connect(({ auth }) => ({
  authenticated: auth.authenticated,
}))(App)
