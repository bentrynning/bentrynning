import { Link } from 'gatsby'
import React from 'react'

type Header = {
  siteTitle: string
}

const Header = ({ siteTitle = '' }) => (
  <div className="header__container">
    <Link to="/" className="header__name">
      {siteTitle}
    </Link>
  </div>
)

export default Header
