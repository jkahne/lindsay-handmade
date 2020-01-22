import React from 'react'
import image53 from "../assets/images/53.svg"
import image60 from "../assets/images/60.svg"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

const Services = () => {
//  const data = useStaticQuery(graphql`
//     query ServicesQuery {
//       file(relativePath: {
//         regex:"/53/"
//       }) {
//         childImageSharp {
//           fluid(maxHeight: 100){
//             ...GatsbyImageSharpFluid_tracedSVG
//           }
//         }
//       }
//     }
//   `)
  // <Img fluid={data.file.childImageSharp.fluid} alt="custom sewing" /> 
  return (

 <section id="services">
   <div className="container">
     <div className="row">
       <div className="col-lg-12 text-center">
         <h2 className="section-heading text-uppercase">Services</h2>
         <h3 className="section-subheading">What we do at Lindsay Kahne Handmade</h3>
       </div>
     </div>
     <div className="row text-center">
       <div className="col-md-6">
         <span >
           <img src={image53} height="100em" alt="custom sewing"/>
         </span>
         <h4 className="service-heading">Custom Sewing</h4>
         <p className="">
           I work directly with you to design and create your custom makes. Whether it be home decor or clothing, together we can tackle something special. We will set up a consultation to discuss all of your options!
         </p>
       </div>
       <div className="col-md-6">
         <span className="linds-icon" >
           <img src={image60} height="100em" alt="classes"/>
         </span>
         <h4 className="service-heading">Classes</h4>
         <p className="">
          I currently offer sewing classes! We can work one on one or have a fun group workshop!  Classes are for all skill levels, whether you have no idea how to thread a sewing machine or just need to learn some tricks of the trade, we can customize classes for you. Let me know what you or your group are interested in!
         </p>
       </div>
     </div>
   </div>
 </section>
  )
}


export default Services 
