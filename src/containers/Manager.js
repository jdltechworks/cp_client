import React from 'react'
import PropTypes from 'prop-types'

// fake 
const Wrapper = ({ title }) => (
  <div className="main">
    <div className="main-content">
      {title}
    </div>
  </div>
)

const Manager = ({ location }) => {
  const { pathname } = location
  
  switch(true) {
    case /inventory/.test(pathname): return (
      <Wrapper title={'inventory view'} />
    )
    case /user/.test(pathname): return (
      <Wrapper title={'users'} />
    )
    default: return (
      <Wrapper title={'default inventory view'} />
    )
  }

}

Manager.propTypes = {
  location: PropTypes.object.isRequired
}

export default Manager