import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Body from 'components/ui/wrapper/Body'
import Menu from 'components/ui/Menu'
import Navbar from 'components/ui/header/Navbar'
import { withRouter } from 'react-router'
const App = ({ children, authenticated }) => (
  <Body>
    <Navbar menu={authenticated} />
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
