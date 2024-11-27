import React from "react";
import About from "../components/about/about";
import { Helmet } from "react-helmet-async";
import SEO from "../components/data/seo";
import "aos/dist/aos.css";
import WCU from "../components/whyChooseUs/whyChooseUs";
import homeInfo from "../components/data/homePage";
import Header from "../UI/Header";
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
      <section style={{ background: "hsl(230deg 60% 98.04%)" }}>
        <Header />
      </section>

      <Container>
        <About />
      </Container>
      <section>
        <WCU />
      </section>
    </>
  );
};

export default AboutPage;
