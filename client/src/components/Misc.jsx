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

const Misc = (props) => {

  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = () => {
    axios.get('/api/misc')
      .then((results) => {
        setTasks(results.data)
      })
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/misc', {
      title: title,
      description: description,
      due_date: dueDate
    })
    alert('New Task Created!')
  }

  return (
    <div>
      <div className="misc-header">Misc.
        <i class="fas fa-plus-circle" onClick={toggleModal}></i>
      </div>
      {isOpen ?
        <div>
          <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false} style={customStyles}>
            <form onSubmit={handleSubmit}>
              <div>Create New Task</div>
              <input type="text" placeholder="Task Title" className="modal-input" onChange={(e) => setTitle(e.target.value)}></input>
              <input type="text" placeholder="Task Description" className="modal-input" onChange={(e) => setDescription(e.target.value)}></input>
              <input type="text" placeholder="Task Due Date" className="modal-input" onChange={(e) => setDueDate(e.target.value)}></input>
              <input type="submit"></input>
            </form>
          </Modal>
        </div>
        : null
      }
      <div>
        {tasks.map((task, key) => (
          <div className="cardContainer">
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            <div>Due Date: {task.due_date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Misc;