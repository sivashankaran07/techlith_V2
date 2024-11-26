// import React, { useState } from "react";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import "./styles/Navbar.css";

// const MyNavbar = () => {
//   const [active, setActive] = useState(false);

//   const handleServiceClick = () => {
//     setActive(!active); // Toggle the active state
//   };

//   return (
//     <Navbar expand="lg">
//       <Container>
//         <Navbar.Brand href="#">Brand Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/about">About</Nav.Link>
//             <NavDropdown
//               title={
//                 <>
//                   <span
//                     className={active ? "services-active" : "services-default"}
//                     onClick={handleServiceClick}
//                   >
//                     Services{" "}
//                   </span>
//                   <FontAwesomeIcon icon={faAngleDown} />
//                 </>
//               }
//               id="navbarScrollingDropdown"
//             >
//               <NavDropdown.Item href="#action3">Website Development</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">Web Design</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">Logo Design</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">Graphic</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#action2">Protfolio</Nav.Link>
//             <Nav.Link href="#action2">Blog</Nav.Link>
//             <Nav.Link href="#action2">Contact Us</Nav.Link>
//           </Nav>
//           <button className="button">Get Quote</button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;
import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import navLinks from "../components/data/Navlinks"; // Import the dynamic navLinks array
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
          Brand Logo
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
          <button className="button">Get Quote</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

