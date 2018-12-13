import React from 'react'
import PropTypes from 'prop-types'
import { edit, single, create } from 'constants/pageRegex' 

// fake 
const Wrapper = ({ title }) => (
  <div className="main-content">
    {title}
  </div>
)

const Projects = ({ location }) => {
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


Projects.propTypes = {
  location: PropTypes.object.isRequired
}

export default Projects