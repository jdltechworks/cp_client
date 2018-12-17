import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Body from 'components/wrapper/Body'
import Menu from 'components/Menu'
import Navbar from 'components/header/Navbar'
import { withRouter } from 'react-router'
import bodyToggle from 'utils/bodyToggle'

const App = ({ children, authenticated }) => (
  <Body>
    <Navbar menu={authenticated}
      headerClassName={`header ${authenticated ? 'logged-in' : 'logged-out'}`}
      onClick={bodyToggle}
    />
    {authenticated && <Menu />}
    <div className="main">
      {children}
    </div>
  </Body>
)




App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated
})

export default withRouter(connect(mapStateToProps)(App))
