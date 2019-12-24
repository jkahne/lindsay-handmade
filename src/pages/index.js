import React from "react";
import { Link } from "gatsby"

import Thumbnail from "../components/thumbnail"
import PortfolioModal from '../components/portfolioModal'

import Layout from "../components/layout"
import image53 from "../assets/images/sewing-icons/53.svg"
import image60 from "../assets/images/sewing-icons/60.svg"
import vacilando from "../assets/images/logos/vacilandoquilting.png"
import linds from "../assets/images/team/026.jpg"

import thumb1 from "../assets/images/portfolio/p1/thumbnail.jpg"
import thumb2 from "../assets/images/portfolio/p2/thumbnail.jpg"
import thumb3 from "../assets/images/portfolio/p3/thumbnail.jpg"

import t1m1 from "../assets/images/portfolio/p1/c1.jpg"
import t1m2 from "../assets/images/portfolio/p1/c2.jpg"
import t1m3 from "../assets/images/portfolio/p1/c3.jpg"

import t2m1 from "../assets/images/portfolio/p2/c1.jpg"
import t2m2 from "../assets/images/portfolio/p2/c2.jpg"
import t2m3 from "../assets/images/portfolio/p2/c3.jpg"
import t2m4 from "../assets/images/portfolio/p2/c4.jpg"
import t2m5 from "../assets/images/portfolio/p2/c5.jpg"

import t3m1 from "../assets/images/portfolio/p3/c1.jpg"
import t3m2 from "../assets/images/portfolio/p3/c2.jpg"
import t3m3 from "../assets/images/portfolio/p3/c3.jpg"
import t3m4 from "../assets/images/portfolio/p3/c4.jpg"

import SEO from "../components/seo"
import { useScrollPosition } from '../hooks//useScrollPosition'

const IndexPage = () => {
  const [pos, setPos] = React.useState(false)
  useScrollPosition(({ prevPos, currPos }) => {
    setPos(currPos.y < -10)
  })

  return (
  <Layout>
    <SEO title="Home" />
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${ pos ? 'navbar-shrink' : ''}`}  id="mainNav">
   <div className="container">
     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
       Menu
       <i className="fas fa-bars"></i>
     </button>
     <div className="collapse navbar-collapse" id="navbarResponsive">
       <ul className="navbar-nav text-uppercase ml-auto">
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger" href="#services">Services</a>
         </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
         </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger" href="#about">About</a>
         </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger" href="#team">Team</a>
         </li>
       </ul>
     </div>
   </div>
 </nav>

 <header className="masthead">
   <div className="container">
     <div className="intro-text">
       <div className="intro-lead-in"></div>
       <div className="intro-heading text-uppercase">Lindsay Kahne Handmade</div>
     </div>
   </div>
 </header>

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
           <img src={image53} height="100em"/>
         </span>
         <h4 className="service-heading">Custom Sewing</h4>
         <p className="">
           I work directly with you to design and create your custom makes. Whether it be home decor or clothing, together we can tackle something special. We will set up a consultation to discuss all of your options!
         </p>
       </div>
       <div className="col-md-6">
         <span className="linds-icon" >
           <img src={image60} height="100em"/>
         </span>
         <h4 className="service-heading">Classes</h4>
         <p className="">
          I currently offer sewing classNamees! We can work one on one or have a fun group workshop!  Classes are for all skill levels, whether you have no idea how to thread a sewing machine or just need to learn some tricks of the trade, we can customize classes for you. Let me know what you or your group are interested in!
         </p>
       </div>
     </div>
   </div>
 </section>


 <section className="bg-light" id="portfolio">
   <div className="container">
     <div className="row">
       <div className="col-lg-12 text-center">
         <h2 className="section-heading text-uppercase">Portfolio</h2>
         <h3 className="section-subheading">A little bit of my past work.</h3>
       </div>
     </div>
     <div className="row">
       <Thumbnail 
         title="Buffalo Plaid Quilt"
         subtitle="Quilting"
         modal="portfolioModal1" 
         imgsrc={thumb1}
       />
       <Thumbnail 
         title="Winter Coat"
         subtitle="Clothing"
         modal="portfolioModal2" 
         imgsrc={thumb2}
       />
       <Thumbnail 
         title="Projects for Vacilando Quilting Co. "
         subtitle="Quilting"
         modal="portfolioModal3" 
         imgsrc={thumb3}
       />
       {/* <Thumbnail  */}
       {/*   title="Lines" */}
       {/*   subtitle="Branding" */}
       {/*   modal="portfolioModal4"  */}
       {/*   imgsrc={thumb4} */}
       {/* /> */}
       {/* <Thumbnail  */}
       {/*   title="Southwest" */}
       {/*   subtitle="Website Design" */}
       {/*   modal="portfolioModal5"  */}
       {/*   imgsrc={thumb5} */}
       {/* /> */}
       {/* <Thumbnail  */}
       {/*   title="Window" */}
       {/*   subtitle="Photography" */}
       {/*   modal="portfolioModal6"  */}
       {/*   imgsrc={thumb6} */}
       {/* /> */}

     </div>
   </div>
 </section>

 <section id="about">
   <div className="container">
     <div className="row">
       <div className="col-lg-12 text-center">
         <h2 className="section-heading text-uppercase">About</h2>

         <h3 className="section-subheading">
           <p>Hi everyone! I’m Lindsay, seamstress here at Lindsay Kahne Handmade, my custom sewing studio. Thanks for stopping by!</p>
           <p>My grandmother taught me to sew as a child. I would sit under her quilting frame with her fabric scraps and a needle and thread and create something of my own as she worked on a quilt. That something was usually pretty hideous in those days. </p>
           <p>As a young adult I started making bags and quilts and shortly after that began working at a bridal shop as a seamstress. I learned so many tricks of the trade while working there, not realizing at the time how valuable those lessons would be! I left the bridal shop to take an office job about a year later.  Money was tight and as a young single woman I thought it was time to pull up my boot straps and make a decent living. I ended up staying in the medical field for twelve years. I continued to sew occasionally and always wanted to branch out and have a business of my own. Finally in 2017 I began to focus on my sewing and creative work again. With some life changes in the cards (i.e. getting engaged and a pending move to the city), I thought it may be time to look at using my talents as a means of income. I took on some contract work as a quilter for a modern quilting company, Vacilando Quilting Co., and began to realize again how much I love working with my hands. So, here we are! I’m sewing full time in Cincinnati and spend my free time hanging out with my husband and our cat!</p>
           <p>Lindsay Kahne Handmade is my way of keeping the creativity flowing and also providing lessons for those who are also interested in diving into the sewing world. It can be so rewarding to see your idea come to fruition. Can’t wait to sew with you!</p>
         </h3>


       </div>
     </div>
  </div>
 </section>

<section className="bg-light" id="team">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Our Team</h2>
        <h3 className="section-subheading"></h3>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src={linds} alt=""/>
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
 <section className="py-5">
   <div className="container">
     <div className="row">
       <div className="col-md-5 col-sm-3"></div>
       <div className="col-md-2 col-sm-3">
         <a href="https://www.vacilandoquilting.co/">
           <img className="img-fluid d-block mx-auto" src={vacilando} alt="" />
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
