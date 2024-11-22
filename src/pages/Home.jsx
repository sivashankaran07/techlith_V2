import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Home.css";
import homeInfo from "../components/data/homePage";
import About from "../components/about/about"; 
 import { Helmet } from "react-helmet-async";
 import SEO from "../components/data/seo";

const Home = () => {
  const currentSeo = SEO.find((item) => item.page.toLowerCase() === "home") || {};
  return (
    <>
      <Helmet>
        <title>{currentSeo.title || `Home | ${homeInfo.main.title}`}</title>
        <meta
          name="description"
          content={currentSeo.description || "Default description"}
        />
        <meta
          name="keywords"
          content={currentSeo.keywords?.join(", ") || "Default keywords"}
        />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <div className="heroSection">
              <Col
                xl={6}
                sm={12}
                className="HeroContent"
                data-aos="fade-in"
                data-aos-duration="1000"  
              >
                <h1>{homeInfo.homepage.title}</h1>
                <p>{homeInfo.homepage.description}</p>
                <button className="HeroButton">
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    {homeInfo.homepage.button}
                  </a>
                </button>               
              </Col>
            </div>
          </Col>
        </Row>
        <About />
      </Container>
    </>
  );
};

export default Home;
