import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Masthead = () => {

 const data = useStaticQuery(graphql`
    query background {
      file(relativePath: {
        regex:"/background/"
      }) {
        childImageSharp {
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (

 <header className="masthead" style={{ backgroundImage: `url(${data.file.childImageSharp.fluid.src})`  }}>
   <div className="container">
     <div className="intro-text">
       <div className="intro-lead-in"></div>
       <div className="intro-heading text-uppercase">Lindsay Kahne Handmade</div>
     </div>
   </div>
 </header>
  )
}


export default Masthead 
