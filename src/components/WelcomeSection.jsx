import React, {  } from "react";
import Lottie from "lottie-react";
import animationData from "../lotties/down.json";
import animationData3 from "../lotties/sun.json";
function WelcomeSection() {
  window.onload =  function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
  return (
    <>
    <div className="" id="welcome">
    <div id="welcome-text-container" className="d-flex align-items-center">
     <div className="container justify-content-center align-items-center">
     <Lottie
        animationData={animationData3}
        style={{ height: "150px", marginLeft:'250px', marginTop:'20px'}}
        loop={true}
      />
      <div id="welcome-to" className="d-flex text-center justify-content-center">
        Welcome to Subscurify
      </div>
      <div id="welcome-to-1" className="d-flex text-center justify-content-center">
        Find out your spotify top artists below
      </div>
      <Lottie
        animationData={animationData}
        style={{ height: "55px"}}
        loop={true}
      />
      </div>
      </div>
      
     
    
    </div>
    </>
  );
}

export default WelcomeSection;
