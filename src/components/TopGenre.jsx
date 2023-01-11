import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist, getUname } from "../actions/spotifyAction";
import Lottie from "lottie-react";
import animationData from "../lotties/bird.json";
import html2canvas from "html2canvas";

function TopGenre() {
  const [access_token, set_access_token] = useState(null);
  const dispatch = useDispatch();
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [uname, setUname] = useState('')
  const [headliners, setHeadliners] = useState('')
  const [co_headliners, setCo_headliners] = useState([])
  const [top_bill, setTop_bill] = useState([])
  const [lineups, setLineups] = useState([])
  const [lineups_2, setLineups_2] = useState([])
  const [lineups_3, setLineups_3] = useState([])
  const [lineups_4, setLineups_4] = useState([])
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

  const { getArtistResult } = useSelector(
    (state) => state.ArtistReducer
  );

  const { getUnameResult } = useSelector(
    (state) => state.ProfileReducer
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
  }, []);
  useEffect(() => {
    dispatch(getUname());
  }, []);

  useEffect(() => {
    if (getArtistResult) {
      setArtists(getArtistResult.items);
    }
  }, [getArtist()]);

  useEffect(()=>{
    if(getUnameResult){
      setUname(getUnameResult.display_name)
    }
  },[getUname()])
 
  useEffect(() => {
    if (artists) {
      setHeadliners(artists.map((e)=>e.name).slice(0, 1).toString());
    }
  }, [artists]);

  useEffect(() => {
    if (artists) {
      setCo_headliners(artists.map((e)=>e.name).slice(1, 3));
    }
  }, [artists]);

  useEffect(()=>{
    if(artists){
      setTop_bill(artists.map((e)=>e.name).slice(3, 6))
    }
  }, [artists])

  useEffect(()=>{
    if(artists){
      setLineups(artists.map((e)=>e.name).slice(6, 9))
    }
  }, [artists])

   useEffect(()=>{
    if(artists){
      setLineups_2(artists.map((e)=>e.name).slice(9, 12))
    }
  }, [artists])

  useEffect(()=>{
    if(artists){
      setLineups_3(artists.map((e)=>e.name).slice(12, 15))
    }
  }, [artists])

  useEffect(()=>{
    if(artists){
      setLineups_4(artists.map((e)=>e.name).slice(15, 18))
    }
  }, [artists])

  


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div id="top-genre" className="d-flex align-items-center">
      <Lottie
        id="lottie-bird"
        animationData={animationData}
        style={{ height: "250px" }}
        loop={true}
      />
      <div className="container d-flex align-items-center mt-5">
      <div id="preview" className="d-flex justify-content-center">
      <div id="artist" >
        <p id="uname" className="text-center">{capitalizeFirstLetter(uname)}'s</p>
        <p id="fest" className="text-center">LAGOON FEST 2023</p>
        
    
            
            <h1 id="headliner" className="text-center mt-3">
              {headliners.toUpperCase()}
            </h1>

            <div id="co_headliner" className="d-flex justify-content-center justify-content-around mt-3">
            {co_headliners.map((e)=>{
              return(
                <h2 id="co_headlinerer" className="text-center">{e}</h2>
              )
            })}
            </div>

            <div id="top_bill" className="d-flex justify-content-center justify-content-around mt-3">
            {top_bill.map((e)=>{
              return(
                <h3 id="top_biller" className="text-center">{e}</h3>
              )
            })}
            </div>

            <div id="lineup" className="d-flex justify-content-center justify-content-around mt-3">
            {lineups.map((e)=>{
              return(
                <h4 id="lineuper" className="text-center">{e}</h4>
              )
            })}
            </div>

            <div id="lineup" className="d-flex justify-content-center justify-content-around mt-2">
            {lineups_2.map((e)=>{
              return(
                <h4 id="lineuper" className="text-center">{e}</h4>
              )
            })}
            </div>

            <div id="lineup" className="d-flex justify-content-center justify-content-around mt-2">
            {lineups_3.map((e)=>{
              return(
                <h4 id="lineuper" className="text-center">{e}</h4>
              )
            })}
            </div>

            <div id="lineup" className="d-flex justify-content-center justify-content-around mt-2">
            {lineups_4.map((e)=>{
              return(
                <h4 id="lineuper" className="text-center">{e}</h4>
              )
            })}
            </div>

        
          </div>

      </div>
      </div>
      
    </div>
  );
}

export default TopGenre;
