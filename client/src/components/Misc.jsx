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
  const [isOpenEditTitle, setIsOpenEditTitle] = useState(false);
  const [isOpenEditDescription, setisOpenEditDescription] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

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

  const toggleEditTitle = () => {
    setIsOpenEditTitle(!isOpenEditTitle)
  }

  const toggleEditDescription = () => {
    setisOpenEditDescription(!isOpenEditDescription)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/misc', {
      title: title,
      description: description
    })
    .then(() => {
      getTasks();
    })
    setIsOpen(!isOpen)
  }

  const deleteTask = (id) => {
    axios.delete(`/api/misc/${id}`)
    .then(() => {
      axios.get('/api/misc')
      .then((results) => {
        setTasks(results.data)
      })
    })
  }

  const editTaskTitle = () => {
    axios.put(`api/misc/${id}/title`, {
      title: title,
    })
  }

  const editTaskDescription = () => {
    axios.put(`api/misc/${id}/description`, {
      description: description
    })
  }

  return (
    <div>
      <div className="misc-header">Misc.
        <i className="fas fa-plus-circle" onClick={toggleModal}></i>
      </div>
      {isOpen ?
        <div>
          <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false} style={customStyles}>
            <form onSubmit={handleSubmit}>
              <div className="task-modal-header">Create New Task</div>
              <input type="text" placeholder="Task Title" className="modal-input" onChange={(e) => setTitle(e.target.value)}></input>
              <input type="text" placeholder="Task Description" className="modal-input" onChange={(e) => setDescription(e.target.value)}></input>
              <input type="submit"></input>
            </form>
          </Modal>
        </div>
        : null
      }
      {isOpenEditTitle ?
        <div>
          <Modal isOpen={isOpenEditTitle} onRequestClose={toggleEditTitle} ariaHideApp={false} style={customStyles}>
          <form onSubmit={editTaskTitle}>
              <div className="task-modal-header">Edit Title</div>
              <input type="text" placeholder="Task Title" value={title} className="modal-input" onChange={(e) => setTitle(e.target.value)}></input>
              <input type="submit"></input>
            </form>
          </Modal>
        </div>
        : null
      }
      {isOpenEditDescription ?
        <div>
          <Modal isOpen={isOpenEditDescription} onRequestClose={toggleEditDescription} ariaHideApp={false} style={customStyles}>
          <form onSubmit={editTaskDescription}>
              <div className="task-modal-header">Edit Description</div>
              <div className="task-modal">
                <input type="text" placeholder="Task Description" value={description} className="modal-input" onChange={(e) => setDescription(e.target.value)}></input>
                <input type="submit" className="submit"></input>
              </div>
            </form>
          </Modal>
        </div>
        : null
      }
      <div className="misc-cards">
        {tasks.map((task, key) => (
          <div className="cardContainer-misc">
            <div className="task-title"
              onClick={ () => {
                setId(task._id)
                setTitle(task.title)
                toggleEditTitle()
              }}>{task.title}
            </div>
            <div className="task-description"
              onClick={ () => {
                setId(task._id)
                setDescription(task.description)
                toggleEditDescription()
              }}>{task.description}
            </div>
            <i className="far fa-times-circle delete-task" onClick={() => deleteTask(task._id)}></i>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Misc;