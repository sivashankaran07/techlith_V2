import React from "react";
import About from "../components/about/about";
import { Helmet } from "react-helmet-async";
import SEO from "../components/data/seo";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  const currentSeo =
    SEO.find((item) => item.page.toLowerCase() === "about") || {};

  return (
    <>
      <Helmet>
        <title>{currentSeo.title || `About | ${homeInfo.main.title}`}</title>
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
        <About />
      </Container>
    </>
  );
};

export default AboutPage;
