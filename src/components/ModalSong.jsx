import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSong, getUname } from "../actions/spotifyAction";
import exportAsImage from "../utils/exportAsImage";

const ModalSong = () => {
  const getToken = localStorage.getItem("token");
  const [song, setSong] = useState("");
  const [uname, setUname] = useState("");
  const [total, setTotal] = useState();
  const [selectedOption, setSelectedOption] = useState("")
  const dispatch = useDispatch();
  const [fullscreen, setFullscreen] = useState(true);
  const { getSongResult } = useSelector((state) => state.ArtistReducer);
  const { getUnameResult } = useSelector((state) => state.ProfileReducer);
  const exportRef = useRef();
  let no = 0;

  const handleFormChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue)
    dispatch(getSong(selectedValue))
  };

  const currentDate = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = weekdays[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${weekday}, ${month} ${day}, ${year}`;

  useEffect(() => {
    if (getSongResult) {
      const newArray = getSongResult.items.map((e) => e.duration_ms);
      const totalSum = newArray.reduce((acc, curr) => acc + curr, 0);
      setTotal(totalSum);
    }
  }, [getSongResult, dispatch]);

  const formatNumber = (number) => {
    if (number < 10) {
      return number.toString().padStart(2, "0");
    } else {
      return number.toString();
    }
  };

  const formatDuration = (duration) => {
    let minutes = Math.floor(duration / 60000);
    let seconds = formatNumber(
      Math.floor((duration / 60000 - Math.floor(duration / 60000)) * 60)
    );

    return minutes + ":" + seconds;
  };

  useEffect(() => {
    dispatch(getSong());
  }, [getToken, dispatch]);
  useEffect(() => {
    dispatch(getUname());
  }, [getToken, dispatch]);

  useEffect(() => {
    if (getUnameResult) {
      setUname(getUnameResult.display_name);
    }
  }, [getUnameResult, dispatch]);
  
  useEffect(() => {
    if (getSongResult) {
      setSong(song);
    }
  }, [getSongResult, dispatch]);
  

  return (
    <div className="mt-5">
      <div>
      <form className="btn-group" onChange={handleFormChange}>
      <input
        type="radio"
        className="btn-check"
        value="short_term"
        name="short_term"
        id="short_term"
        autoComplete="off"
        checked={selectedOption === 'short_term'}
      />
      <label className="btn btn-secondary" htmlFor="short_term">
        Last Month
      </label>

      <input
        type="radio"
        className="btn-check"
        value="medium_term"
        name="medium_term"
        id="medium_term"
        autoComplete="off"
        checked={selectedOption === 'medium_term'}
      />
      <label className="btn btn-secondary" htmlFor="medium_term">
        Last 6 Months
      </label>

      <input
        type="radio"
        className="btn-check"
        value="long_term"
        name="long_term"
        id="long_term"
        autoComplete="off"
        checked={selectedOption === 'long_term'}
      />
      <label className="btn btn-secondary" htmlFor="long_term">
        All Time
      </label>
    </form>
      </div>
      <div ref={exportRef} className="receipt-container mt-5 text-center">
        <div className="text-center">
          <img
            width={"150px"}
            className="mx-auto"
            src="mart-logo.png"
            alt=""
            srcset=""
          />
     
          {
            
            selectedOption==="short_term"|| !selectedOption ? <p>LAST MONTH</p> : selectedOption ===
            "medium_term" ? <p>LAST 6 MONTHS</p> : <p>ALL TIME</p>
          }
         
        </div>
        <div className="text-center mt-4">
          <p className="date" style={{ fontFamily: "receipt" }}>
            ORDER #3061 FOR {uname.toUpperCase()}
          </p>
          <p className="date" style={{ fontFamily: "receipt" }}>
            {formattedDate.toUpperCase()}
          </p>
        </div>
        <table
          className="mx-auto"
          style={{ fontFamily: "receipt", fontWeight: "500" }}
        >
          <thead>
            <tr className="t_head">
              <th className="text-start">QTY</th>
              <th className="text-start px-3">Item</th>
              <th className="text-start">AMT</th>
            </tr>
          </thead>
          <tbody className="text-start">
            {getSongResult
              ? getSongResult.items.map((e) => (
                  <tr>
                    <td>
                      {getSongResult
                        ? (no += 1).toString().padStart(2, "0")
                        : ""}
                    </td>
                    <td style={{ width: "200px" }}>
                      <div className="px-3">
                        {e.name} - {e.artists.map((e) => e.name).join(", ")}
                      </div>
                    </td>
                    <td>{formatDuration(e.duration_ms)}</td>
                  </tr>
                ))
              : ""}

            <tr className="total">
              <td colspan="2">Item Count :</td>
              <td className="" colspan="">
                {" "}
                {getSongResult ? getSongResult.items.length : ""}{" "}
              </td>
            </tr>
            <tr className="total-btm">
              <td className="" colspan="2">
                Total :
              </td>
              <td className="" colspan="">
                <span className="">{formatDuration(total)}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mx-auto mt-4">
          <p style={{ fontFamily: "receipt" }} className="date">
            CARD #: 6969 8888 4646
          </p>
          <p style={{ fontFamily: "receipt" }} className="date">
            AUTH CODE: 0404
          </p>
          <p style={{ fontFamily: "receipt" }} className="date">
            CARDHOLDER: {uname.toUpperCase()}
          </p>
        </div>
        <div className="text-center py-4 mt-3 mb-3">
          <p style={{ fontFamily: "receipt" }}>THANK YOU FOR VISITING!</p>
          <img className="mx-auto" width={"200px"} src="barcode.png" alt="" />
          <p style={{ fontFamily: "receipt" }}>subscurify.netlify.app</p>
          <img src="spotify_black.png" width={"80px"} alt="" />
        </div>
      </div>
      <button
                onClick={() =>
                  exportAsImage(
                    exportRef.current,
                    getUnameResult.display_name
                  )
                }
                type="button"
                className="btn btn-lg justify-content-center"
                style={{
                  backgroundColor: "#f82e9e",
                  color: "#c4faf6",
                  fontWeight: "700",
                }}
              >
                DOWNLOAD
              </button>
    </div>
  );
};

export default ModalSong;
