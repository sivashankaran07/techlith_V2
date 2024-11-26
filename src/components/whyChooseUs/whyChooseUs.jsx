import React from "react";
import "./styles/style.css";
import homeInfo from "../data/homePage";
import Images from "../data/Images";

const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="section-title">
                <h3 className="" style={{ color: "hsl(293,100%,50%)" }}>
                  why choose us
                </h3>
                <h2 className="text-anime-style-3">Why choose us ?</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {homeInfo.WCU.map((info, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={`wcu-item-${index}`}>
                  <div className="why-choose-us-item">
                    <div className="icon-box">
                      <img src={info.img} alt="" />
                    </div>
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-md-12">
        {homeInfo.WCU2.map((info, index) => {
          return (
            <div className="why-us-explore-item" key={`wcu2-item-${index}`}>
              <div className="row">
                <div className="col-md-12" >
                  <div className="why-us-section-title">
                    <div className="section-title">
                      <h2
                        className="text-anime-style-3"
                        style={{ perspective: "400px" }}
                      >
                        {info.title}
                      </h2>
                    </div>

                    <div className="explore-item-icon">
                      <img src={Images.globe} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="explore-item-content ">
                    <p>{info.description}</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="explore-item-tags">
                    <ul>
                      {info.social.map((icon, index) => (
                        <li key={`wcu2-item-${index}`}>
                          <a href={icon.useHref} className="wuc-btn-default  social-icon ">
                            {icon.title}
                            <svg
                              width="18"
                              height="20"
                              viewBox="0 0 22 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{marginLeft:"20px"}}
                            >
                              <path
                                d="M18.188 6.96511L2.88596 22.2671L0.37207 19.7532L15.6723 4.45122H2.18726V0.895508H21.7437V20.4519H18.188V6.96511Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WhyChooseUs;
