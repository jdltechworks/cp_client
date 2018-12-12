import React from 'react';
import Body from 'components/ui/wrapper/Body'
import Navbar from 'components/ui/header/Navbar'
import { connect } from 'react-redux'

const App = ({ children }) => (
  <Body>
    <Navbar />
    {children}
  </Body>
)

export default connect(state => state)(App)
