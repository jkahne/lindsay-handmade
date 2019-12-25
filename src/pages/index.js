import React from "react";

import PortfolioModal from '../components/portfolioModal'

import Layout from "../components/layout"
import vacilando from "../assets/images/logos/vacilandoquilting.png"


import t1m1 from "../assets/images/portfolio/1c1.jpg"
import t1m2 from "../assets/images/portfolio/1c2.jpg"
import t1m3 from "../assets/images/portfolio/1c3.jpg"

import t2m1 from "../assets/images/portfolio/2c1.jpg"
import t2m2 from "../assets/images/portfolio/2c2.jpg"
import t2m3 from "../assets/images/portfolio/2c3.jpg"
import t2m4 from "../assets/images/portfolio/2c4.jpg"
import t2m5 from "../assets/images/portfolio/2c5.jpg"

import t3m1 from "../assets/images/portfolio/3c1.jpg"
import t3m2 from "../assets/images/portfolio/3c2.jpg"
import t3m3 from "../assets/images/portfolio/3c3.jpg"
import t3m4 from "../assets/images/portfolio/3c4.jpg"

import SEO from "../components/seo"
import Nav from "../components/nav"
import Masthead from "../components/masthead"
import Services from "../components/services"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import Team from "../components/team"

const IndexPage = () => {


  return (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Masthead />
    <Services />
    <Portfolio />
    <About />
    <Team />



 <section className="py-5">
   <div className="container">
     <div className="row">
       <div className="col-md-5 col-sm-3"></div>
       <div className="col-md-2 col-sm-3">
         <a href="https://www.vacilandoquilting.co/">
           <img className="img-fluid d-block mx-auto" src={vacilando} alt="Vacilando" />
         </a>
       </div>
       <div className="col-md-5 col-sm-3"></div>


     </div>
   </div>
 </section>

 <PortfolioModal
   riggedKey="1"
   title="Buffalo Plaid Quilt"
   subtitle="Custom King Size Quilt, made with Kona cottons"
   description="This quilt is a standard patchwork style quilt in a buffalo plaid layout. I used 100% Kona cotton fabric for the top and backing. Machine quilted in straight line quilting. We did a pop of color for the binding and a personal appliqué in the corner. "
   images={[t1m1, t1m2, t1m3]}
   data={[
     "Date: Fall of 2017",
     "Category: Quilting"
   ]}
 />

 <PortfolioModal
   riggedKey="2"
   title="Winter Coat"
   subtitle="Personal Project"
   description="I created the pattern for this coat from an old coat I loved and used for years. This coat is SO warm! It is insulated with thinsulate, the body is lined with faux fur and the sleeves are lined with a silky rayon blend, with a heavy jacquard exterior. It has toggle closures and awesome deep faux fur lined pockets"
   images={[t2m1, t2m2, t2m3, t2m4, t2m5]}
   data={[
     "Date: Fall 2015",
     "Category: Clothing"
   ]}
 />
 <PortfolioModal
   riggedKey="3"
   title="Projects for Vacilando Quilting Co."
   subtitle="Here are a few of the pieces I have quilted for Vacilando Quilting Co."
   description="I work as a production assistant for Laura Preston, owner of Vacilando Quilting Co. Here are a few of the pieces I have worked on for Laura. In the photos shown here, we have one of a kind quilts which I have basted and quilted after Laura has pieced the tops. Also shown are some of the new Lowlands Collections, which I have done full production on (piecing, basting, quilting and binding). Check out all of Laura’s designs on her website! "
   images={[t3m1, t3m2, t3m3, t3m4]}
   data={[
     "Date: Summer 2018 - Present",
     "Client: Vacilando Quilting Co.",
     "Category: Quilting"
   ]}
 />


  </Layout>
  )
}

export default IndexPage;
