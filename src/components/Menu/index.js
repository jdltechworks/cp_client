import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({ children }) => (
  <div className="menu-panel">
    <div className="menu-container">
      {children}
    </div>
  </div>
)

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

export default Menu