import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import WebDevelopment from "./pages/services/WebDevelopment";
import WebDesign from "./pages/services/WebDesign";
import LogoDesign from "./pages/services/LogoDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import GraphicDesign from "./pages/services/GraphicDesign";
import UIUXDesign from "./pages/services/UIUXDesign";
import "../src/App.css";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Services Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
