import React from 'react'
import PropTypes from 'prop-types'
import Body from 'components/ui/wrapper/Body'
import Navbar from 'components/ui/header/Navbar'

const App = ({ children, }) => (
  <Body>
    <Navbar />
    <div className="main">
      {children}
    </div>
  </Body>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
}

export default App
