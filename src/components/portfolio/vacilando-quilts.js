import React from 'react'
import Thumbnail from "./thumbnail"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const VacilandoQuilts = () => {
 const data = useStaticQuery(graphql`
    query VacilandoQuiltsQuery {
      file(relativePath: {
        regex:"/3thumbnail/"
      }) {
        childImageSharp {
          fluid(maxHeight: 200, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  //  

  return (

       <Thumbnail 
         title="Projects for Vacilando Quilting Co. "
         subtitle="Quilting"
         modal="portfolioModal3" 
         imgthing={
           <Img 
             fluid={data.file.childImageSharp.fluid} 
             alt="Projects for Vacilando Quilting Co. " 
             className="img-fluid"
           />}
       />
  )
}

export default VacilandoQuilts
