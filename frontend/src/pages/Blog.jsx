import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/data/seo";
import "aos/dist/aos.css";
import Header from "../UI/Header";
import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  const currentSeo =
  SEO.find((item) => item.page.toLowerCase() === "blog") || {};
  // console.log(currentSeo);

return (
  <>
    <Helmet>
      <title>{currentSeo.title }</title>
      <meta
        name="description"
        content={currentSeo.description }
      />
      

  
      <meta
        name="keywords"
        content={currentSeo.keywords?.join(", ") || "Default keywords"}
      />
    </Helmet>
    <section style={{background:"hsl(230deg 60% 98.04%)"}}>
      <Header />
    </section>
    </>
  )
}

export default Blog
