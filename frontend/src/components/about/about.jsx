import React, { useEffect } from "react";
import "./styles/about.css";
import homeInfo from "../data/homePage";
import SEO from "../data/seo";
import Images from "../data/Images";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";


const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const currentSeo =
    SEO.find((item) => item.page.toLowerCase() === "about") || {};

  return (
    <>
      <div className="about-section">
        <Row>
          <Col xl={8}>
            <p
              style={{ color: "hsl(293, 60%, 40%)" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-offset="50"
            >
              {homeInfo.about.lable}
            </p>
            <h1
              className="fw-bold mb-4"
              style={{ fontSize: "53px" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-offset="50"
            >
              {homeInfo.about.title}
            </h1>
          </Col>
          <Col xl={6}>
            <div
              className="about-image"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-offset="50"
            >
              <div className="about-img">
                <figure
                  className="image-anime reveal"
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: "1",
                    visibility: "inherit",
                  }}
                >
                  <img
                    src={Images.aboutImg}
                    alt="aboutimg"
                    style={{ transform: "translate(0px, 0px)" }}
                  />
                </figure>
              </div>
            </div>
            {/* <div className="about-consultation">
            <figure>
              <img
                src={Images.aboutCircle}
                alt="consultationimg"
                style={{ transform: "translate(0px, 0px)" }}
              />
            </figure>
          </div> */}
          </Col>
          <Col xl={6}>
            <div className="about-content d-flex flex-column align-items-center justify-content-center ">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-offset="50"
              >
                {homeInfo.about.description1}
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-offset="50"
              >
                {homeInfo.about.description2}
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-offset="50"
              >
                {homeInfo.about.description3}
              </p>

              <ul
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                data-aos-offset="50"
              >
                {homeInfo.about.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <motion.button
              className="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-offset="50"
            >
              <a href="">Read More</a>
            </motion.button>
          </Col>
        </Row>
      </div>
      
    </>
  );
};

export default About;
