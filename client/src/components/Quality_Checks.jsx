import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { UserContext } from './UserContext.jsx';

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

const Quality_Checks = (props) => {

  const [qualityChecks, setQualityChecks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    getQualityChecks();
  }, [])

  const getQualityChecks = () => {
    axios.get('/api/quality_checks')
      .then((results) => {
        setQualityChecks(results.data)
      })
  }

  const deleteQualityCheck = (name) => {
    axios.delete(`/api/quality_checks/${name}`)
    .then(() => {
      axios.get('/api/quality_checks')
      .then((results) => {
        setQualityChecks(results.data)
      })
    })
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/quality_checks', {
      name: name
    })
    .then(() => {
      axios.get('/api/quality_checks')
      .then((results) => {
        setQualityChecks(results.data)
      })
    })
    toggleModal();
  }

  return (
    <div>
      <div className="qc-header">Quality Checks
        <i class="fas fa-plus-circle qc-plus" onClick={toggleModal}></i>
      </div>
      {isOpen ?
        <div>
          <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false} style={customStyles}>
            <form onSubmit={handleSubmit}>
              <div>Add New Quality Check</div>
              <input type="text" placeholder="Name" className="modal-input" onChange={(e) => setName(e.target.value)}></input>
              <input type="submit"></input>
            </form>
          </Modal>
        </div>
        : null
      }
      <div className="qc-cards">
        {qualityChecks.length > 0 ?
          <div>
          {qualityChecks.map((qc, key) => (
            <div className="cardContainer-quality-check">
              <i class="far fa-times-circle" onClick={() => deleteQualityCheck(qc.name)}></i>
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