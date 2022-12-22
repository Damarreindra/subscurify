import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../lotties/down.json";
import animationData2 from "../lotties/flower.json";
import animationData3 from "../lotties/sun.json";
import axios from "axios";
import { Button } from "react-bootstrap";
function WelcomeSection() {
  return (
    <div id="welcome">
      <div id="welcome-text">
      <h1 id="welcome-to" className="text-center">
        Welcome to Subscurify
      </h1>
      <h3 id="welcome-to-1" className="text-center">
        Find out more about your music taste below
      </h3>
      <Lottie
        id=""
        animationData={animationData}
        style={{ height: "50px"}}
        loop={true}
      />
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
      <Lottie
        animationData={animationData3}
        style={{ height: "150px", marginLeft:'250px'}}
        loop={true}
      />
    </div>
  );
}

export default WelcomeSection;
