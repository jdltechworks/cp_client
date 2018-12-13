import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import Wrapper from './Wrapper'
import authActions from 'actions/Auth/actions'


const { authenticating } = authActions

const LoginForm = ({ handleSubmit, action }) => (
  <Wrapper>
    <form target="dummy"
      onSubmit={handleSubmit(values => action(values)
    )}>
      <Field
        name="username"
        type="text"
        className="form-control login-user"
        autoComplete="off" 
        component="input" />
      <div className="divider"></div>
      <Field
        name="password"
        type="password"
        className="form-control login-pass"
        component="input" />
      <button className="btn btn-primary btn-block">ENTER</button>
    </form>
  </Wrapper>
)

LoginForm.propTypes = {
  action: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  action: authenticating,
}

const Login = connect(null, mapDispatchToProps)(LoginForm)

export default reduxForm({
  form: 'login-form'
})(Login)