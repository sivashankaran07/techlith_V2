import React from "react";
  import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">          
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4>About Us</h4>
              <p>
                Techlith Solution is dedicated to providing cutting-edge web
                development, digital marketing, and design solutions tailored to
                your needs.
              </p>
              <p>
                <strong>Location:</strong> Sipcot Ranipet
              </p>
              <p>
                <strong>Email:</strong> contact@techlithsolution.com
              </p>
              <p>
                <strong>Phone:</strong>+91 6385248028
              </p>
            </div>
          </div>         
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>          
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4>Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="/services/web-development">Web Development</a>
                </li>
                <li>
                  <a href="/services/web-design">Web Design</a>
                </li>
                <li>
                  <a href="/services/logo-design">Logo Design</a>
                </li>
                <li>
                  <a href="/services/ui-ux-design">UI/UX Design</a>
                </li>
                <li>
                  <a href="/services/digital-marketing">Digital Marketing</a>
                </li>
                <li>
                  <a href="/services/graphic-design">Graphic Design</a>
                </li>
              </ul>
            </div>
          </div>          
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4>Subscribe to Our Newsletter</h4>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
              <div className="social-links">
                <a href="http://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="http://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="http://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 
            {
              new Date().getFullYear() === 2023? 2023 : `2023 - ${new Date().getFullYear()}`
            
            } Techlith Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
