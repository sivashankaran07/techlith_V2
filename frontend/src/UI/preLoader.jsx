
import React from 'react';
import './styles/Preloader.css';
import Images from '../components/data/Images'

const Preloader = () => {
  return (
    <div className="preloader">
    <div className="spinner-container">
      <img src={Images.preLoader} alt="Logo" className="preloader-logo" />
      <div className="spinner"></div>
    </div>
  </div>
 
  );
};

export default Preloader;
