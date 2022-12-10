import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist } from "../actions/spotifyAction";
import Lottie from "lottie-react";
import animationData from '../lotties/bird.json';
function TopGenre() {
  const [access_token, set_access_token] = useState(null);
  const dispatch = useDispatch();
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

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



  return (
    <div id="top-genre">
      <Lottie id='lottie-bird' animationData={animationData} style={{height:'250px'}} loop={true}/>
      <div id="top-g" style={{}} className="mt-5 mx-auto">
        <h5
        id="top-g-title"
        >
          Your Top Artists
        </h5>
        {artists.map((e) => {
          return <h1 id="artist" className="text-center">{e.name}</h1>;
        })}
      </div>
    </div>
  );
}

export default TopGenre;
