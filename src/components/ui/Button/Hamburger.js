import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = ({ onClick }) => (
  <button type="button" onClick={onClick} className="menu-toggle">
    <span className="menu-line"></span>
    <span className="menu-line"></span>
    <span className="menu-line"></span>
  </button>
)

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Hamburger