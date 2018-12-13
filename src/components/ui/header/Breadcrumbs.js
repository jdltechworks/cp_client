import React from 'react'
import PropTypes from 'prop-types'
import Hamburger from 'components/ui/Button/Hamburger'

const Breadcrumbs = ({ title, subtitle }) => (
  <div class="navbar-header">
    <Hamburger onClick={() => {}}/>
    <a href="/" class="navbar-brand"></a>
    <div class="navbar-path">
      <span class="navbar-title">{title}</span>
      <span> : </span>
      <span class="">{subtitle}</span>
    </div>
  </div>
)

Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Breadcrumbs
