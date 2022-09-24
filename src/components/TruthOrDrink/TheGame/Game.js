import React, { useEffect, useState } from 'react'
import TaskContainer from './TaskContainer'
import './TheGame.css'

const Game = ({tasks}) => {
    const [datas, setDatas] = useState([{task: 'Ready to start?', drink: 'Click the button you want to select!'}])
    const [clicked, setClicked] = useState(0)


   const shuffleArray = ()  => {
    for (let i = datas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [datas[i], datas[j]] = [datas[j], datas[i]];
    }
}
    useEffect(() => {shuffleArray()})

   const handleClick = () => {

    if(datas.length===1) {
        setDatas(tasks)
    }

    if(clicked<datas.length-1 && datas.length !== 1) {
        setClicked(clicked+1)
    }
   }
   console.log(datas)
   console.log(clicked)


  return (
    <div className='game'>
        <TaskContainer text={datas[clicked].task} click1={handleClick}/>
        <TaskContainer text={datas[clicked].drink} click1={handleClick}/>
    </div>
  )
}

export default Game