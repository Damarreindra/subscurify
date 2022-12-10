import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist } from "../actions/spotifyAction";
import Lottie from "lottie-react";
import animationData from "../lotties/trash.json";
import { motion } from "framer-motion";
function RateSection() {
  const [artists, setArtists] = useState([]);
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const { getArtistResult, getArtistLoading, getArtistError } = useSelector(
    (state) => state.ArtistReducer
  );

  useEffect(() => {
    dispatch(getArtist());
  }, [dispatch]);

  useEffect(() => {
    if (getArtistResult) {
      setArtists(getArtistResult.items);
    }
  }, [getArtistResult]);

  const indieIndon = artists.map(
    (e) =>
      e.genres === "indonesian indie" ||
      "indonesian pop" ||
      "indonesian singer-songwriter"
  );

  return (
    <div id="top-genre">
    <div id="top-g" style={{}} className="mt-5 mx-auto">
      <h5
      id="top-g-title"
      >
        Your Music Taste is
      </h5>
      {indieIndon ? (
        <div>
    <Lottie
    id="lottie-rate"
    animationData={animationData}
    loop={true}
  />
  <h2 id="rateresult">
  Trash Jamet Indon
</h2>
</div>
      ):""}
    </div>
  </div>

    // <div
    //   id="top-genre"
    // >
    //   <div className="mx-auto">
    //   <h2 id="rate">
    //     Your Music Taste is
    //   </h2>
      // {indieIndon ? (
      //   <div>
          // <Lottie
          //   id="lottie-rate"
          //   animationData={animationData}
          //   loop={true}
          // />
          // <h2 id="rateresult">
          //   Trash Jamet Indon
          // </h2>
      //   </div>
      // ) : (
      //   ""
      // )}
    //   </div>
    // </div>
  );
}

export default RateSection;
