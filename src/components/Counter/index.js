import React from 'react'
import CountTo from 'react-count-to'
import PropTypes from 'prop-types'

const Counter = ({ count, label }) => (
  <div className="reporting-content">
    <h4 className="text-center">{label}</h4>
    <div className="active-counter">
      { count && <CountTo from={0} to={count} speed={500} /> }
    </div>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}

export default Counter