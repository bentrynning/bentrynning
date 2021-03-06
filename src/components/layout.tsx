import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.less'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="frame">
          <Header siteTitle={data.site.siteMetadata.title} />
          <footer className="footer text-s">
            © Copright {new Date().getFullYear()} Bent Rynning - All Rights
            Reserved
          </footer>
        </div>
        <main className="container">{children}</main>
      </>
    )}
  />
)

export default Layout
