import React from 'react'
import PropTypes from 'prop-types'

import Valign from 'components/ui/wrapper/Valign'
import LoginBg from 'assets/images/Brand_Bg.png'

export const Wrapper = ({ children }) => (
  <div className="main">
    <div className="login-form">
      <Valign>
        <h2>
          Welcome, login to access
          <br />the inventory system
        </h2>
        <div className="login-panel">
          {children}
        </div>
      </Valign>
      <div className="bottom-banner">
        <img src={LoginBg} alt="Login Background" />
      </div>
    </div>
  </div>
)
Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
}

export default Wrapper