import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/data/seo";
import homeInfo from "../components/data/homePage";
import Header from "../UI/Header";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const currentSeo =
    SEO.find((item) => item.page.toLowerCase() === "contact") || {};
  return (
    <div>
      <section style={{ background: "hsl(230deg 60% 98.04%)" }}>
        <Header />
      </section>
    </div>
  );
};

export default Contact;
