import React from 'react'
import PropTypes from 'prop-types'
import matchParams from 'utils/matchParams'
import Hamburger from 'components/Button/Hamburger'
import Breadcrumbs from 'components/header/Breadcrumbs'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Navbar = ({ onClick, children, menu, location, headerClassName }) => {
  const { pathname } = location
  const params = matchParams(pathname)

  const { section, subsection } = params

  return (
    <header className={headerClassName}>
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            {menu && <Hamburger onClick={onClick} />}
            <Link to="/" className="navbar-brand">{''}</Link>
            <Breadcrumbs section={section} subsection={subsection} />
          </div>
          <div className="navbar-right clearfix">
            {children}
          </div>
        </div>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func
  ]),
  menu: PropTypes.bool,
  onClick: PropTypes.func,
  headerClassName: PropTypes.string
}

export default withRouter(Navbar)