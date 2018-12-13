import React from 'react'
import Loader from './Loader'

const Image = ({ children, classes, src }) => (
  <div className={classes}>
    <Loader image={src} />
    {children}
  </div>
)

export default Image