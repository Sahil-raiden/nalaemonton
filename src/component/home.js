import React, { useState } from 'react';
import './assets/css/home.css'; 
import { Helmet } from 'react-helmet';
import Navbar from './navBar';
import { Navigate } from 'react-router-dom'; 
import videoPath from './assets/video/v.mp4'

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true); 
  };

  return (
    <div className="home">
      <Helmet>
        <link rel="preconnect" href={videoPath} />
      </Helmet>
      <video className="background-video" autoPlay muted loop>
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <Navbar />
      <div className="company-info">
        <h1>Nalaemton Infotech</h1>
        <p>Cybersecurity - 360°</p>
        <button
          className="btn_home"
          onClick={handleButtonClick}
          disabled={isClicked} // Disable button after click to prevent multiple redirects
        >
          <span class="btn-text-one">Get Started</span>
          <span class="btn-text-two">Great!</span>
        </button>
      
      </div>

      {isClicked && <Navigate to="/Service" replace />}
    </div>
  );
};

export default Home;
