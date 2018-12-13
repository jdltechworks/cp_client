import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ children }) => (
  <header className="header logged-out">
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">{''}</a>
        </div>
        <div className="navbar-right clearfix">
          {children}
        </div>
      </div>
    </div>
  </header>
)

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func
  ]),
}

export default Navbar