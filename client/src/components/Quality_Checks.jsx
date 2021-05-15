import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quality_Checks = (props) => {

  const [tasks, setTasks] = useState([]);

  const fbChecks = 0;
  const twitterChecks = 0;

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = () => {
    axios.get('/api/quality_checks')
      .then((results) => {
        setTasks(results.data)
      })
  }

  return (
    <div>
      <div className="cardContainer-quality-check">
        <i class="far fa-times-circle"></i>
        <div className="qc-name">Name Here</div>
        <div className="facebook">Facebook</div>
        <i class="fas fa-minus fa-minus-fb"></i>
        <div className="fb-checks">{fbChecks}</div>
        <i class="fas fa-plus fa-plus-twitter"></i>
        <div className="twitter">Twitter</div>
        <i class="fas fa-minus fa-minus-twitter"></i>
        <div className="twitter-checks">{twitterChecks}</div>
        <i class="fas fa-plus fa-plus-fb"></i>
      </div>
    </div>
  )
}

export default Quality_Checks;