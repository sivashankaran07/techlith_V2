import React from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import SEO from "../components/data/seo";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1) || "home";
  const currentSeo =
    SEO.find((item) => item.page.toLowerCase() === currentPath.toLowerCase()) ||
    {};

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1
                  className="text-anime-style-3"
                  style={{ perspective: "400px" }}
                >
                  {currentSeo.title || "Page"}
                </h1>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {currentSeo.page || currentPath}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
