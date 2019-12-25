import React from 'react'
import linds from "../assets/images/lindsayHeadshot.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Team = () => {

 const data = useStaticQuery(graphql`
    query TeamQuery {
      file(relativePath: {
        regex:"/lindsayHeadshot/"
      }) {
        childImageSharp {
          fluid(quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (

<section className="bg-light" id="team">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Our Team</h2>
        { /* < h3 className="section-subheading"></h3> */ }
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <div className="team-member">
          <img 
            className="mx-auto rounded-circle" 
            src={data.file.childImageSharp.fluid.src} 
            alt="Lindsay's profile"
          />
           {/* <Img */}
           {/*   fluid={data.file.childImageSharp.fluid} */}
           {/*   alt="Lindsay's profile" */}
           {/*   className="img-fluid" */}
           {/* /> */}

          <h4>Lindsay Kahne</h4>
          <p className="">Sewist Extraordinaire</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://www.instagram.com/lindsaykahnehandmade">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:Lindsay@lindsaykahnehandmade.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <p className="large">
          Contact me anytime, either here or on Instagram! I’m always happy to hear about your ideas!
        </p>
      </div>
    </div>
  </div>
</section>
  )
}


export default Team 
