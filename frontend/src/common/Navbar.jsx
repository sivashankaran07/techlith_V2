import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; 
import navLinks from "../components/data/Navlinks";
import Images from "../components/data/Images";
import "./styles/Navbar.css"; // Import the custom CSS

const MyNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setActiveDropdown(!activeDropdown);
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="custom-container">
        <Navbar.Brand href="/" className="navbar-brand">
          <img
            src={Images.logo}
            alt="Techlith Logo"
            className="navbar-logo"
            height={80}
            width={180}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <NavDropdown
                  key={index}
                  title={
                    <>
                      <span
                        className={
                          activeDropdown
                            ? "services-active"
                            : "services-default"
                        }
                        onClick={handleDropdownToggle}
                      >
                        {link.name}
                      </span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </>
                  }
                  id={`navbarScrollingDropdown-${index}`}
                >
                  {link.dropdown.map((dropdownLink, subIndex) => (
                    <NavDropdown.Item
                      key={subIndex}
                      href={dropdownLink.href}
                      className="nav-link"
                    >
                      {dropdownLink.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link key={index} href={link.href} className="nav-link">
                  {link.name}
                </Nav.Link>
              )
            )}
          </Nav>
          <motion.button
            className="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            Get Quote
          </motion.button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
