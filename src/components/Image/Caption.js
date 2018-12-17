import React from 'react'
import PropTypes from 'prop-types'

const Caption = ({ children }) => (
  <div style={{backgroundColor: '#fff'}} className="thumbnail-desc">
    {children}
  </div>
)

Caption.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Caption