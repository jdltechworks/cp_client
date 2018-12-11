import React from 'react'
import PropTypes from 'prop-types'

const Valign = ({ children }) => (
  <div className="valign">
    <div className="valign-content">
      {children}
    </div>
  </div>
)

Valign.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
}

export default Valign