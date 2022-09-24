import React from 'react'
import NormalBall from '../NormalBall/NormalBall'
import Game from './TheGame/Game'
import './TruthOrDrink.css'

const TruthOrDrink = ({tasks}) => {
  return (
    <div className='truthOrDrink'>
        <div className='start-ballHolder1'>
            <NormalBall bg={"#FF9A0C"}/>
        </div>
        <div className='start-ballHolder2'>
            <NormalBall bg={"#C6E7FF"}/>
        </div>
        <div className='start-ballHolder3'>
            <NormalBall bg={"#796EF9"}/>
        </div>
        <div className='start-ballHolder4'>
            <NormalBall bg={"#FF9A0C"}/>
        </div>
        <div className='truthOrDrink-container'>
            <h1>Truth or Drink</h1>
            <Game tasks={tasks}/>
        </div>
      </div>
  )
}

export default TruthOrDrink