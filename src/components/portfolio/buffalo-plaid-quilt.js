import React from 'react'
import Thumbnail from "./thumbnail"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const BuffaloPlaidQuilt = () => {
 const data = useStaticQuery(graphql`
    query BuffaloPlaidQuiltQuery {
      file(relativePath: {
        regex:"/1thumbnail/"
      }) {
        childImageSharp {
          fluid(maxHeight: 200, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (

       <Thumbnail 
         title="Buffalo Plaid Quilt"
         subtitle="Quilting"
         modal="portfolioModal1" 
         imgthing={
           <Img 
             fluid={data.file.childImageSharp.fluid} 
             alt="Buffalo Plaid Quilt" 
             className="img-fluid"
           />}
       />
  )
}

export default BuffaloPlaidQuilt
