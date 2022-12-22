import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist } from "../actions/spotifyAction";
import Lottie from "lottie-react";
import animationData from "../lotties/bird.json";
import html2canvas from "html2canvas";

function TopGenre() {
  const [access_token, set_access_token] = useState(null);
  const dispatch = useDispatch();
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [headliners, setHeadliners] = useState([])
  const element = document.querySelector('#top-genre')
  const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };

  const { getArtistResult, getArtistLoading, getArtistError } = useSelector(
    (state) => state.ArtistReducer
  );

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
  useEffect(() => {
    dispatch(getArtist());
  }, [dispatch]);

  useEffect(() => {
    if (getArtistResult) {
      setArtists(getArtistResult.items);
    }
  }, [getArtistResult]);
  useEffect(() => {
    if (artists) {
      setHeadliners(artists.slice(0, 3));
    }
  }, [artists]);
 console.log(headliners);
  return (
    <div id="top-genre">
      <Lottie
        id="lottie-bird"
        animationData={animationData}
        style={{ height: "250px" }}
        loop={true}
      />
      <div id="preview">
      <img id="preview-img" src="./pantai.svg" className="img-fluid" alt="..."></img>
      {/* <div id="artist" >
        {artists.map((e) => {
          return (
            
            <h1 className="text-center">
              {e.name}
            </h1>
          
          );
        })}
          </div> */}

      </div>
      
      
    </div>
  );
}

export default TopGenre;
