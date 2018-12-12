import React from 'react'
import Wrapper from './Wrapper'
import { reduxForm, Field } from 'redux-form'

const Login = ({ handleSubmit }) => (
  <Wrapper>
    <form onSubmit={handleSubmit((values) => console.log(values))} target="dummy">
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

export default reduxForm({
  form: 'login-form'
})(Login)