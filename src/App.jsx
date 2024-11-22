import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
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
        </Routes>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
