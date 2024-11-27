import React from "react";
import "./styles/style.css";
import homeInfo from "../data/homePage";
import Images from "../data/Images";

const Service = () => {
  return (
    <>
      <div className="our-services" >
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7 col-md-7">
              <div className="section-title">
                <h3 className="" style={{ color: " hsl(293, 100%, 50%)" }}>
                  our services
                </h3>
                <h2
                  className="text-anime-style-3"
                  style={{ perspective: "400px" }}
                >
                  What we can offer today
                </h2>
              </div>
            </div>

            <div className="col-lg-5 col-md-5">
              <div className="section-btn">
                <a href="#" className="btn-default">
                  view all services
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div></div>
      <div className="row">
        {homeInfo.services.map((info, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
              <div className="service-content">
                <div className="service-content-title">
                  <h2>{info.title || "Web Development"}</h2>
                  <a href="#">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.188 6.96511L2.88596 22.2671L0.37207 19.7532L15.6723 4.45122H2.18726V0.895508H21.7437V20.4519H18.188V6.96511Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <p>
                  {info.description ||
                    "Totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae."}
                </p>
              </div>
              <div className="service-image">
                <figure className="image-anime">
                  <img src={info.img || Images.webDev} alt="Service" />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
