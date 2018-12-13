import React from 'react'
import PropTypes from 'prop-types'
import ImageLoader from 'react-imageloader'
import loader from 'assets/images/ajax-loader.gif'

const loaderTheme = () => (
  <img
    src={loader}
    style={{ width: '16px', height: '16px' }}
    alt="loader" />
)

const Loader = ({ image }) => (
  <ImageLoader
    wrapper={React.createFactory('div')}
    src={image}
    preloader={loaderTheme}>
    <img src="https://dummyimage.com/180x180/fff/fff" alt="dummy"/>
  </ImageLoader>
)

Loader.propTypes = {
  image: PropTypes.string.isRequired
}

export default Loader