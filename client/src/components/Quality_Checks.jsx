import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quality_Checks = (props) => {

  const [qualityChecks, setQualityChecks] = useState([]);

  const fbChecks = 0;
  const twitterChecks = 0;

  useEffect(() => {
    getQualityChecks();
  }, [])

  const getQualityChecks = () => {
    axios.get('/api/quality_checks')
      .then((results) => {
        setQualityChecks(results.data)
      })
  }

  return (
    <div>
      {qualityChecks.length > 0 ?
        <div>
        {qualityChecks.map((qc, key) => (
          <div className="cardContainer-quality-check">
            <i class="far fa-times-circle"></i>
            <div className="qc-name">{qc.name}</div>
            <div className="facebook">Facebook</div>
            <i class="fas fa-minus fa-minus-fb"></i>
            <div className="fb-checks">{qc.facebook}</div>
            <i class="fas fa-plus fa-plus-twitter"></i>
            <div className="twitter">Twitter</div>
            <i class="fas fa-minus fa-minus-twitter"></i>
            <div className="twitter-checks">{qc.twitter}</div>
            <i class="fas fa-plus fa-plus-fb"></i>
          </div>
        ))}
        </div>
      : null
    }
    </div>
  )
}

export default Quality_Checks;




// return (
//   <div>
//     {tasks.length > 0 ?
//       <div className="cardContainer-quality-check">
//       <i class="far fa-times-circle"></i>
//       <div className="qc-name">Name Here</div>
//       <div className="facebook">Facebook</div>
//       <i class="fas fa-minus fa-minus-fb"></i>
//       <div className="fb-checks">{fbChecks}</div>
//       <i class="fas fa-plus fa-plus-twitter"></i>
//       <div className="twitter">Twitter</div>
//       <i class="fas fa-minus fa-minus-twitter"></i>
//       <div className="twitter-checks">{twitterChecks}</div>
//       <i class="fas fa-plus fa-plus-fb"></i>
//     </div>
//     : null
//   }
//   </div>
// )