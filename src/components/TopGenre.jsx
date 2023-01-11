import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Lottie from "lottie-react";
import animationData from "../lotties/bird.json";
import html2canvas from "html2canvas";
import ShortTerm from "./ShortModal";
import MediumTerm from "./Modal";
import LongTerm from "./LongModal";

function TopGenre() {
  const [access_token, set_access_token] = useState(null);

  

  function getHashParams() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    let params = getHashParams();
    let token = params.access_token;
    set_access_token(token);
    localStorage.setItem("token", token);
  });

  return (
    <>
    
      <div id="top-genre" className="d-flex align-items-center justify-content-center">
      
        <div className="text-center" id="tutor">
         <p> CLICK ON A TIME FRAME, MY DUDE.</p>
         </div>
       <div id="img-top-container" className="d-flex justify-content-around">
       <img src="https://user-images.githubusercontent.com/80618060/211764062-ef5d58d9-5787-4670-ac87-415ac84b46b9.png" alt="" />
        <img src="https://user-images.githubusercontent.com/80618060/211764080-a5524a9b-99b1-4cbf-b93c-7b599975bf94.png" alt="" />
        <img src="https://user-images.githubusercontent.com/80618060/211764092-ba18aa46-2931-40b3-8549-96c0f2ced008.png" alt="" />
      
       </div>
       <div id="img-top-container" className="d-flex justify-content-around">
      <ShortTerm/>
      <MediumTerm/>
      <LongTerm/>
       </div>
      </div>
     
    </>
  );
}

export default TopGenre;
