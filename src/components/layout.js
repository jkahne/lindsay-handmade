/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Layout = ({ children }) => {
 const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {
        regex:"/background/"
      }) {
        childImageSharp {
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
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
