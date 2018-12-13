import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = ({ onClick }) => (
  <button type="button" onClick={onClick} class="menu-toggle">
    <span class="menu-line"></span><span class="menu-line"></span><span class="menu-line"></span>
  </button>
)

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Hamburger