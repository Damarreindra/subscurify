import React, { useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist, getUname } from "../actions/spotifyAction";
import html2canvas from "html2canvas";
import exportAsImage from "../utils/exportAsImage";



const ModalMedium = ({ show, HideHandler }) => {
    const dispatch = useDispatch();
  
  const [uname, setUname] = useState('')
  const [headliners, setHeadliners] = useState('')
  const [co_headliners, setCo_headliners] = useState([])
  const [top_bill, setTop_bill] = useState([])
  const [lineups, setLineups] = useState([])
  const [lineups_2, setLineups_2] = useState([])
  const [lineups_3, setLineups_3] = useState([])
  const exportRef = useRef();
  
  const { getArtistResult } = useSelector(
    (state) => state.ArtistReducer
  );

  const { getUnameResult } = useSelector(
    (state) => state.ProfileReducer
  );


    useEffect(() => {
        dispatch(getArtist());
      }, [dispatch]);
      useEffect(() => {
        dispatch(getUname());
      }, [dispatch]);
  
    
      useEffect(()=>{
        if(getUnameResult){
          setUname(getUnameResult.display_name)
        }
      },[getUname(), dispatch])
     
     
      useEffect(() => {
        if (getArtistResult) {
          setHeadliners(getArtistResult.items.map((e)=>e.name).slice(0, 1).toString());
        }
      }, [getArtistResult, dispatch]);
    
      useEffect(() => {
        if (getArtistResult) {
          setCo_headliners(getArtistResult.items.map((e)=>e.name).slice(1, 3));
        }
      }, [getArtistResult, dispatch]);
    
      useEffect(()=>{
        if(getArtistResult){
          setTop_bill(getArtistResult.items.map((e)=>e.name).slice(3, 6))
        }
      }, [getArtistResult, dispatch])
    
      useEffect(()=>{
        if(getArtistResult){
          setLineups(getArtistResult.items.map((e)=>e.name).slice(6, 9))
        }
      }, [getArtistResult, dispatch])
    
       useEffect(()=>{
        if(getArtistResult){
          setLineups_2(getArtistResult.items.map((e)=>e.name).slice(9, 12))
        }
      }, [getArtistResult, dispatch])
    
      useEffect(()=>{
        if(getArtistResult){
          setLineups_3(getArtistResult.items.map((e)=>e.name).slice(12, 15))
        }
      }, [getArtistResult, dispatch])
  
    
    
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
            <div onClick={HideHandler} className="close float-end">
              &times;
            </div>
            <div className="d-flex justify-content-center">
            <button
              onClick={() => exportAsImage(exportRef.current, getUnameResult.display_name+" Med Term")}
            type="button"
            className="btn mt-5 btn-lg justify-content-center"
            style={{backgroundColor:'#f82e9e', color:'#c4faf6', fontWeight:'700'}}
        >
           DOWNLOAD
        </button>
        </div>
        <div>
          <p className="text-center">if no result u can just refresh the web</p>
        </div>
            <div className="container d-flex align-items-center mt-5">
      <div ref={exportRef} id="preview" className="d-flex justify-content-center">
      <div id="artist">
        <p id="uname" className="text-center">{capitalizeFirstLetter(uname)}'s</p>
        <p id="fest" className="text-center">LAGOON FEST 2023</p>
        
    
           
            
        <h1 id="headliner" className="text-center mt-3">
              {headliners.toUpperCase()}
            </h1>

            <div id="co_headliner" className="d-flex justify-content-center justify-content-around mt-3">
            {co_headliners.map((e)=>{
              return(
                <div id="co_headlinerer" className="w-100 text-center">{e}</div>
              )
            })}
            </div>

            <div id="top_bill" className="d-flex justify-content-center justify-content-around mt-3">
            {top_bill.map((e)=>{
              return(
                <div id="top_biller" className="w-25 text-center">{e}</div>
              )
            })}
            </div>

            <div id="lineup" className="d-flex justify-content-center justify-content-around mt-3">
            {lineups.map((e)=>{
              return(
                <div id="lineuper" className="w-25 text-center">{e}</div>
              )
            })}
            </div>

            <div id="lineup" className="d-flex justify-content-center justify-content-around mt-2">
            {lineups_2.map((e)=>{
              return(
                <div id="lineuper" className="w-25 text-center">{e}</div>
              )
            })}
            </div>

            <div id="lineup" className="d-flex justify-content-center justify-content-around mt-2">
            {lineups_3.map((e)=>{
              return(
                <div id="lineuper" className="w-25 text-center">{e}</div>
              )
            })}
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