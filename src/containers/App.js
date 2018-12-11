import React, { Component } from 'react';
import Body from 'components/ui/wrapper/Body'
import Navbar from 'components/ui/header/Navbar'

const App ({ children }) => (
  <Body>
    <Navbar />
    {children}
  </Body>
)

export default App
