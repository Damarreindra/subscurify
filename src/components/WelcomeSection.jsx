import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../lotties/down.json";
import animationData2 from "../lotties/flower.json";
import animationData3 from "../lotties/sun.json";
import axios from "axios";
import { Button } from "react-bootstrap";
function WelcomeSection() {
  return (
    <>
    <div className="" id="welcome">
    <div id="welcome-text-container" className="d-flex align-items-center">
     <div className="container justify-content-center align-items-center">
     <Lottie
        animationData={animationData3}
        style={{ height: "150px", marginLeft:'250px'}}
        loop={true}
      />
      <div id="welcome-to" className="d-flex justify-content-center">
        Welcome to Subscurify
      </div>
      <div id="welcome-to-1" className="d-flex justify-content-center">
        Find out more about your music taste below
      </div>
      <Lottie
        animationData={animationData}
        style={{ height: "55px"}}
        loop={true}
      />
      </div>
      </div>
      
      
      <div id="flower">
      <Lottie
        animationData={animationData2}
        style={{ height: "250px"}}
        loop={true}
      />
      </div>
      <div id="flower">
      <Lottie
        animationData={animationData2}
        style={{ height: "250px", marginLeft:'50px', transform: 'rotate(25deg)'}}
        loop={true}
      />
      </div>
    
    </div>
    </>
  );
}

export default WelcomeSection;
