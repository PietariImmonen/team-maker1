import React from 'react'

const TaskContainer = ({text, click1}) => {


  return (
    <div className='task-container' onClick={click1}>
        <div className='task-container-text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TaskContainer