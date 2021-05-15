import React from 'react';

const TaskCard = ({task}) => {

  console.log('task', task)
  return (
    <div>
      <div className="cardContainer">
        <div>Title: {task.title}</div>
        <div>Description: {task.description}</div>
        <div>Month: {task.month}</div>
      </div>
    </div>
  )
}

export default TaskCard;