/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const Layout = ({ children }) => {


  return (
    <>
      {children}

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <span className="copyright"> Copyright &copy; Lindsay Kahne Handmade {new Date().getFullYear()} </span>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
