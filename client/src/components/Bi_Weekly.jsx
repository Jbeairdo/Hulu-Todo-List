import React, { useState, useEffect } from 'react';
import { Checkmark } from 'react-checkmark';
import axios from 'axios';
import Modal from 'react-modal';

// Styles for Modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Bi_Weekly = (props) => {

  const [clicked, setClicked] = useState(false);
  const clickedClass = clicked === false ? "cardContainer" : "cardContainerDone";

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div>
      <div className="bi_weekly-header">Bi-Weekly
      </div>
      {clicked ?
      <div className={clickedClass} onClick={handleClick}>
        <div className="article-review">KB Article Review Email</div>
        <Checkmark className="checkMark"/>
      </div>:
      <div className={clickedClass} onClick={handleClick}>
        <div className="article-review">KB Article Review Email</div>
      </div>
      }
    </div>
  )
}

export default Bi_Weekly;