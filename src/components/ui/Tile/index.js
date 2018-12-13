import React from 'react'
import PropTypes from 'prop-types'
import Image from 'components/ui/Image'

const Tile = ({ src, children, classes }) => (
  <div className={`col-sm-4 ${classes}`}>
    <Image
      classes="thumbnail"
      src={src && src}
    >
    {children}
    </Image>
  </div>
)

Tile.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default Tile
