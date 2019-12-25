import React from 'react'
import Thumbnail from "./portfolio/thumbnail"
import BuffaloPlaidQuilt from './portfolio/buffalo-plaid-quilt'
import WinterCoat from './portfolio/winter-coat'
import VacilandoQuilts from './portfolio/vacilando-quilts'

const Portfolio = () => {

  return (

 <section className="bg-light" id="portfolio">
   <div className="container">
     <div className="row">
       <div className="col-lg-12 text-center">
         <h2 className="section-heading text-uppercase">Portfolio</h2>
         <h3 className="section-subheading">A little bit of my past work.</h3>
       </div>
     </div>
     <div className="row">
       <BuffaloPlaidQuilt />
       <WinterCoat />
       <VacilandoQuilts/>
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
  )
}


export default Portfolio 
