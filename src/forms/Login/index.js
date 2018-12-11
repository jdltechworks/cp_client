import React from 'react'
import Valign from 'components/ui/wrapper/Valign'
import LoginBg from 'assets/images/Brand_Bg.png'

const Login = () => (
  <div className="main">
    <div className="login-form">
      <Valign>
        <h2>
          Welcome, login to access
          <br />the inventory system
        </h2>
        <div className="login-panel">
          <form method="post" target="dummy">
              <input type="text" className="form-control login-user" name="username" autoComplete="off" />
              <div className="divider"></div>
              <input type="password" className="form-control login-pass" name="password" />
            <button className="btn btn-primary btn-block">ENTER</button>
          </form>
        </div>
      </Valign>
    </div>
    <div className="bottom-banner">
      <img src={LoginBg} alt="Login Background" />
    </div>
  </div>
)

export default Login