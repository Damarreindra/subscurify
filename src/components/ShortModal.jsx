import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ModalShort from "./ModalShort";


const ShortTerm = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const HandleShowModal = () => {
    setIsModalShow(!isModalShow);
  };
    
  return (
 
    <div>
      
        <button
            onClick={HandleShowModal}
            type="button"
            className="btn mb-3 btn-lg justify-content-center"
            style={{backgroundColor:'#f82e9e', color:'#c4faf6', fontWeight:'700'}}
        >
           LAST MONTH
        </button>
     
      <ModalShort show={isModalShow} HideHandler={HandleShowModal} />
      
      
    </div>
  );
};

export default ShortTerm;

