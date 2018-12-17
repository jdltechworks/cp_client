import React from 'react'
import PropTypes from 'prop-types'
import Hamburger from 'components/ui/Button/Hamburger'
import Breadcrumbs from 'components/ui/header/Breadcrumbs'
import { withRouter } from 'react-router'

const Navbar = ({ children, menu, location }) => {
  const { pathname } = location
  const matchParams = pathname.match(/\/([a-z]+)?\/?([0-9]+)?/i)
  const sections = [
    'section',
    'subsection',
  ]

  const params = matchParams.reduce((acc, val, key) => {
    if(key > 0 && val) acc[sections[key -1]] = val
    return acc
  }, {})

  const { section, subsection } = params

  return (
    <header className={`header ${menu ? 'logged-in' : 'logged-out'}`}>
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            {menu && <Hamburger onClick={(e) => {
              e.preventDefault()
              document.body.classList.toggle('menu-open')
            }}/>}
            <a href="/" className="navbar-brand">{''}</a>
            <Breadcrumbs section={section} subsection={subsection ? subsection : null} />
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
}

export default withRouter(Navbar)