import React, { useState, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const clickedClass = clicked === false ? "cardContainer" : "cardContainerDone";

  const handleClick = () => {
    setClicked(!clicked)
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
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
      {isOpen ?
        <div>
          <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false} style={customStyles}>
            <form></form>
            <div>Add New Quality Check</div>
            <input type="text" placeholder="Name" className="modal-input"></input>
          </Modal>
        </div>
        : null
      }
    </div>
  )
}

export default Bi_Weekly;