import React from 'react'
import NormalBall from '../NormalBall/NormalBall'
import HeadingLinks from './HeadingLinks'
import './startscreen.css'

const StartScreen = () => {
  return (
    <div className='start'>
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
      <HeadingLinks />
    </div>
  )
}

export default StartScreen