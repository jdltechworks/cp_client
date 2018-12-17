import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Breadcrumbs = ({ section, subsection }) => (
  <div className="navbar-path">
    <span className="navbar-title">{section}</span>
    {subsection && 
      <Fragment>
        <span> : </span> <span>{subsection}</span>
      </Fragment>
    }
  </div>
)

Breadcrumbs.propTypes = {
  section: PropTypes.string.isRequired,
  subsection: PropTypes.string,
}

export default Breadcrumbs
