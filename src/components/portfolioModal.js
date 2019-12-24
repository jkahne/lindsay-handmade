import React from 'react'

const PortfolioModal = ({title, subtitle, images, description, data, riggedKey}) => {


  return (


    <div className="portfolio-modal modal fade" id={`portfolioModal${riggedKey}`} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">{title}</h2>
                  <p className="item-intro">{subtitle}</p>

                  <div id={`carouselExampleIndicators${riggedKey}`} className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      {images.map((img,index) => (
                        <li
                          key={`${description}-indicators-${index}`}
                          data-target={`carouselExampleIndicators${riggedKey}`}
                          data-slide-to={index}
                          className={index === 0 ? 'active': ''}>
                        </li>
                      ))}
                    </ol>
                    <div className="carousel-inner">

                      {images.map((img,index) => (
                        <div key={`${description}-thumbs-${index}`} className={`carousel-item ${index === 0 ? 'active': ''}`}>
                          <img className="d-block w-100" src={img} alt=""/>
                        </div>
                      ))}

                    </div>
                    <a className="carousel-control-prev" href={`#carouselExampleIndicators${riggedKey}`} role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={`#carouselExampleIndicators${riggedKey}`} role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>

                  <p>{description}</p>
                  <ul className="list-inline">
                    {
                      data.map((dat,index) => (
                        <li key={`${description}-data-${index}`} >{dat}</li>
                      ))
                    }
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fas fa-times"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


export default PortfolioModal
