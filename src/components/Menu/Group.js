import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Group = ({ label, icon,  links }) => (
  <div className="menu-content">
    <h3>
      <span className={`icon ${icon} icon-fw`}></span>
      {label}
    </h3>
    <ul className="menu">
      {links.map(({ url, label, count }) => (
        <li><Link to={url}>{label}</Link> 
          {count && <span className="badge">{count}</span>}
        </li>
      ))}
    </ul>
  </div>
)

Group.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    counter: PropTypes.number,
  })),
}

export default Group