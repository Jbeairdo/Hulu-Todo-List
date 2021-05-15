import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Bi_Weekly = (props) => {

  const [clicked, setClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const clickedClass = clicked === false ? "cardContainer" : "cardContainerDone";

  const handleClick = () => {
    setClicked(!clicked)
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const addQC = () => {
    axios.post({
      // name:
    })
  }

  return (
    <div>
      <div className="bi_weekly-header">Bi-Weekly
      </div>
      <div className={clickedClass} onClick={handleClick}>
        <div className="article-review">KB Article Review Email</div>
      </div>
      <div className="qc-header">Quality Checks
        <i class="fas fa-plus-circle qc-plus" onClick={toggleModal}></i>
      </div>
    </div>
  )
}

export default Bi_Weekly;