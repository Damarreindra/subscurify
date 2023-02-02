import React, { useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist, getUname } from "../actions/spotifyAction";
import exportAsImage from "../utils/exportAsImage";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalMedium = ({ show, HideHandler }) => {
  const dispatch = useDispatch();

  const [uname, setUname] = useState("");
  const [headliners, setHeadliners] = useState("");
  const [headliners1, setHeadliners1] = useState("");
  const [headliners2, setHeadliners2] = useState("");
  
  const [co_headliners, setCo_headliners] = useState([]);
  const [co_headliners1, setCo_headliners1] = useState([]);
  const [co_headliners2, setCo_headliners2] = useState([]);
  const [top_bill, setTop_bill] = useState([]);
  const [top_bill1, setTop_bill1] = useState([]);
  const [top_bill2, setTop_bill2] = useState([]);
  const [lineups, setLineups] = useState([]);
  const [lineups1, setLineups1] = useState([]);
  const [lineups2, setLineups2] = useState([]);
  const day1 = new Date(Date.now()).getDay()
  const day2 = new Date(Date.now()+ ( 3600 * 1000 * 24)).getDay()
  const day3 = new Date(Date.now()+ ( 3600 * 1000 * 24)*2).getDay()
  
  const getDayName = (day) => {
    if(day === 0){
      return(
        "SUN"
      )
    }else if(day === 1){
      return("MON")
    }
    else if(day === 2){
      return("TUE")
    }
    else if(day === 3){
      return("WED")
    }
    else if(day === 4){
      return("THU")
    }
    else if(day === 5){
      return("FRI")
    }
    else if(day === 6){
      return("SAT")
    }
  }
  
  const date1 = new Date(Date.now()).getDate()
  const date2 = new Date(Date.now() + ( 3600 * 1000 * 24)).getDate()
  const date3 = new Date(Date.now() + (( 3600 * 1000 * 24)*2)).getDate()
  const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const monthName1 = month[new Date(Date.now()).getMonth()];
  const monthName2 = month[new Date(Date.now()+( 3600 * 1000 * 24)).getMonth()];
  const monthName3 = month[new Date(Date.now()+( 3600 * 1000 * 24)*2).getMonth()];

  const exportRef = useRef();
  const getToken = localStorage.getItem("token");
  const { getArtistResult } = useSelector((state) => state.ArtistReducer);

  const { getUnameResult } = useSelector((state) => state.ProfileReducer);

  useEffect(() => {
    dispatch(getArtist());
  }, [getToken, dispatch]);

  useEffect(() => {
    if (getUnameResult) {
      setUname(getUnameResult.display_name);
    }
  }, [getUname(), dispatch]);

  useEffect(() => {
    if (getArtistResult) {
      setHeadliners(
        getArtistResult.items
          .map((e) => e.name)
          .slice(0, 1)
          .toString()
      );
    }
  }, [getArtistResult, dispatch]);

  useEffect(() => {
    if (getArtistResult) {
      setHeadliners1(
        getArtistResult.items
          .map((e) => e.name)
          .slice(1, 2)
          .toString()
      );
    }
  }, [getArtistResult, dispatch]);

  useEffect(() => {
    if (getArtistResult) {
      setHeadliners2(
        getArtistResult.items
          .map((e) => e.name)
          .slice(2, 3)
          .toString()
      );
    }
  }, [getArtistResult, dispatch]);

  
  useEffect(() => {
    if (getArtistResult) {
      setCo_headliners(
        getArtistResult.items.map((e) => e.name).slice(3, 6)
      );
    }
  }, [getArtistResult, dispatch]);
  useEffect(() => {
    if (getArtistResult) {
      setCo_headliners1(
        getArtistResult.items.map((e) => e.name).slice(6, 9)
      );
    }
  }, [getArtistResult, dispatch]);
  useEffect(() => {
    if (getArtistResult) {
      setCo_headliners2(
        getArtistResult.items.map((e) => e.name).slice(9, 12)
      );
    }
  }, [getArtistResult, dispatch]);

  useEffect(() => {
    if (getArtistResult) {
      setTop_bill(getArtistResult.items.map((e) => e.name).slice(12, 15));
    }
  }, [getArtistResult, dispatch]);
  useEffect(() => {
    if (getArtistResult) {
      setTop_bill1(getArtistResult.items.map((e) => e.name).slice(15, 18));
    }
  }, [getArtistResult, dispatch]);
  useEffect(() => {
    if (getArtistResult) {
      setTop_bill2(getArtistResult.items.map((e) => e.name).slice(18, 21));
    }
  }, [getArtistResult, dispatch]);

  useEffect(() => {
    if (getArtistResult) {
      setLineups(getArtistResult.items.map((e) => e.name).slice(21, 23));
    }
  }, [getArtistResult, dispatch]);
  useEffect(() => {
    if (getArtistResult) {
      setLineups1(getArtistResult.items.map((e) => e.name).slice(23, 25));
    }
  }, [getArtistResult, dispatch]);
  useEffect(() => {
    if (getArtistResult) {
      setLineups2(getArtistResult.items.map((e) => e.name).slice(25, 28));
    }
  }, [getArtistResult, dispatch]);
  
 

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  

  return (
    <div className="mt-5">
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={HideHandler}
        size="lg"
        className="d-flex"
      >
        <div id="">
          <div className="main-popup sm-2">
            <div onClick={HideHandler} className="close float-start">
             <AiFillCloseCircle/>
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={() =>
                  exportAsImage(
                    exportRef.current,
                    getUnameResult.display_name + " Med Term"
                  )
                }
                type="button"
                className="btn mt-5 btn-lg justify-content-center"
                style={{
                  backgroundColor: "#f82e9e",
                  color: "#c4faf6",
                  fontWeight: "700",
                }}
              >
                DOWNLOAD
              </button>
            </div>
            <div>
              <p className="text-center">
                if no result u can just refresh the web
              </p>
            </div>
            <div id="modul-container" className="container d-flex align-items-center mt-5">
              <div
                ref={exportRef}
                id="preview"
                className="d-flex justify-content-center"
                >
                <div id="artist" className=" container w-100">
                <div className="position-absolute bottom-0 start-0" id="spotify-logo-container">
                        <img id="spotify_logo_poster" src="../spotify_logo.svg" alt="" srcset="" />
                      </div>
                  <p id="uname" className="text-center">
                    {capitalizeFirstLetter(uname)}'s
                  </p>
                  <p id="fest" className="text-center">
                    LAGOON FEST 2023
                  </p>

                  <div id="day1" className="container text-center w-100">
                    <div className="container text-center w-100">
                    <div id="date-container" className="float-start">
                  <h1 id="date" className="">{getDayName(day1)}</h1>
                  </div>
                  <div id="date-container" className="float-end">
                      <h1 id="date" className="">{monthName1} {date1}</h1>
                      </div>
                      <div id="headliner-container">
                      <h1 id="headliner" className="">
                        {headliners.toUpperCase()}
                      </h1>
                      </div>
                    
                    </div>

                    <div className="container d-flex justify-content-center gap-2 text-center w-100">
                      {co_headliners.map((e) => {
                        return <h1 className="" id="co_headlinerer">{e}</h1>;
                      })}
                    </div>

                    <div className="container d-flex justify-content-center gap-2 text-center w-100">
                      {top_bill.map((e) => {
                        return <h1 id="top_biller">{e}</h1>;
                      })}
                    </div>

                    <div className="container d-flex justify-content-center gap-2 text-center w-100">
                      {lineups.map((e) => {
                        return <h1 id="top_biller">{e}</h1>;
                      })}
                    </div>
                    
                    
                  </div>


                  <div id="day2" className="container text-center w-100">
                  <div className="container text-center w-100">
                    <div id="date-container" className="float-start">
                  <h1 id="date" className="">{getDayName(day2)}</h1>
                  </div>
                  <div id="date-container" className="float-end">
                      <h1 id="date" className="">{monthName2} {date2}</h1>
                      </div>
                      <div id="headliner-container">
                      <h1 id="headliner" className="">
                        {headliners1.toUpperCase()}
                      </h1>
                      </div>
                    
                    </div>

                    
                    <div className="container d-flex justify-content-center gap-2 text-center w-100">
                      {co_headliners1.map((e) => {
                        return (
                       
                        <h1 className="" id="co_headlinerer">{e}</h1>
                      
                        )
                      })}
                    </div>

                    <div className="container d-flex justify-content-center gap-3  text-center w-100">
                      {top_bill1.map((e) => {
                        return <h1 id="top_biller">{e}</h1>;
                      })}
                    </div>

                    <div className="container d-flex justify-content-center gap-3 text-center w-100">
                      {lineups1.map((e) => {
                        return <h1 id="top_biller">{e}</h1>;
                      })}
                    </div>
                    
                  </div>


                  <div id="day3" className="container text-center w-100">
                  <div className="container text-center w-100">
                  <div id="date-container" className="float-start">
                  <h1 id="date" className="">{getDayName(day3)}</h1>
                  </div>
                  <div id="date-container" className="float-end">
                      <h1 id="date" className="">{monthName3} {date3}</h1>
                      </div>
                      <div id="headliner-container">
                      <h1 id="headliner" className="">
                        {headliners2.toUpperCase()}
                      </h1>
                      </div>
                    
                    </div>

                    <div className="container d-flex justify-content-center gap-3 text-center w-100">
                      {co_headliners2.map((e) => {
                        return <h1 id="co_headlinerer">{e}</h1>;
                      })}
                    </div>

                    <div className="container d-flex justify-content-center gap-3 text-center w-100">
                      {top_bill2.map((e) => {
                        return <h1 id="top_biller">{e}</h1>;
                      })}
                    </div>

                    <div className="container d-flex justify-content-center gap-3 text-center w-100">
                      {lineups2.map((e) => {
                        return <h1 id="top_biller">{e}</h1>;
                      })}
                    </div>
                  </div>
                     
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalMedium;
