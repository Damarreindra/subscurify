import React, { useEffect, useRef, useState } from "react";
import ShortTerm from "./ShortModal";
import MediumTerm from "./Modal";
import LongTerm from "./LongModal";
import SongModal from "./SongModal";
import { useDispatch, useSelector } from "react-redux";
import { getArtist, getArtistLong, getArtistShort, getUname } from "../actions/spotifyAction";
import ModalSong from "./ModalSong";

function TopSong() {
  

  return (
    <>
    
      <div id="top-song" className="d-flex align-items-center justify-content-center">
      
        <div className="text-center" id="tutor">
        <p>TOP SONGS SECTION</p>
         <p className="fs-4"> CLICK ON A TIME FRAME, PALS.</p>
         </div>
        
         <ModalSong/>
      </div>
     
    </>
  );
}

export default TopSong;
