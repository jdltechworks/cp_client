import React from 'react'
import PropTypes from 'prop-types'
import { edit, single, create } from 'constants/pageRegex' 

const Wrapper = ({ title }) => (
  <div className="main-content">
    {title}
  </div>
)


const Inventory = ({ location }) => {
  const { pathname } = location
  
  switch(true) {
    case edit.test(pathname): return (
      <Wrapper title={'edit'} />
    )
    case single.test(pathname): return (
      <Wrapper title={'single view'} />
    )
    case create.test(pathname): return (
      <Wrapper title={'create'} />
    )
    default: return (
      <Wrapper title={'default'} />
    )
  }
}

Inventory.propTypes = {
  location: PropTypes.object.isRequired
}


export default Inventory
