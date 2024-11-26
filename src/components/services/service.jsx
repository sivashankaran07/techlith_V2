import React from "react";
import "./styles/style.css";
// import homeInfo from "../data/homePage";
// import SEO from "../data/seo";
import Images from "../data/Images";

const service = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
          <div className="service-content">
            <div className="service-content-title">
              <h2>Web Development</h2>
              <a href="#">
                {/* <img src={Images.arrow} alt="Arrow" />
                 */}
                 <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.188 6.96511L2.88596 22.2671L0.37207 19.7532L15.6723 4.45122H2.18726V0.895508H21.7437V20.4519H18.188V6.96511Z" fill="white"/>
</svg>

              </a>
            </div>
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
              architecto beatae.
            </p>
          </div>
          <div className="service-image">
            <figure className="image-anime">
              <img src={Images.webDev} alt="Service" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
