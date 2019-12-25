import React from 'react'
import Thumbnail from "./thumbnail"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const WinterCoat = () => {
 const data = useStaticQuery(graphql`
    query WinterCoatQuery {
      file(relativePath: {
        regex:"/2thumbnail/"
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
         title="Winter Coat"
         subtitle="Clothing"
         modal="portfolioModal2" 
         imgthing={
           <Img 
             fluid={data.file.childImageSharp.fluid} 
             alt="Winter Coat" 
             className="img-fluid"
           />}
       />
  )
}

export default WinterCoat
