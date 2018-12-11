import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ children }) => (
  <div className="wrapper container-fluid">
    {children}  
  </div>  
);

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
}



export default Body;