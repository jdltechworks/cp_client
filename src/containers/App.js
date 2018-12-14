import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Body from 'components/ui/wrapper/Body'
import Navbar from 'components/ui/header/Navbar'
const App = ({ children, authenticated }) => {
  console.log(authenticated)
  return (
    <Body>
      <Navbar />
      <div className="main">
        {children(authenticated)}
      </div>
    </Body>
  )
}




App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
}

export default connect(({ auth }) => ({
  authenticated: auth.authenticated,
}))(App)
