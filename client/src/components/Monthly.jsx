import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard.jsx';

const Monthly = (props) => {

  const [clickedRecap, setClickedRecap] = useState(false);
  const [clickedHudos, setClickedHudos] = useState(false);
  const [clickedQC, setClickedQC] = useState(false);

  const clickedRecapClass = clickedRecap === false ? "cardContainer" : "cardContainerDone";
  const clickedHudosClass = clickedHudos === false ? "cardContainerMonthly" : "cardContainerMonthlyDone";
  const clickedQCClass = clickedQC === false ? "cardContainerMonthly" : "cardContainerMonthlyDone";

  const handleRecapClick = () => {
    setClickedRecap(!clickedRecap)
  }

  const handleHudosClick = () => {
    setClickedHudos(!clickedHudos)
  }

  const handleQCClick = () => {
    setClickedQC(!clickedQC)
  }

  return (
    <div>
      <div className="monthly-header">Monthly
      </div>
      <div className={clickedRecapClass} onClick={handleRecapClick}>
        <div className="recap">Recap Quiz</div>
      </div>
      <div className={clickedHudosClass} onClick={handleHudosClick}>
        <div className="hudos-email">Hudos Email</div>
      </div>
      <div className={clickedQCClass} onClick={handleQCClick}>
        <div className="qc-monthly">Quality Checks</div>
      </div>
    </div>
  )
}

export default Monthly;