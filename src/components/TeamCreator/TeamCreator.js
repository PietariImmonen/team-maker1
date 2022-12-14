import React from 'react'
import './teamcreator.css'
import NormalBall from '../NormalBall/NormalBall'
import TeamCreatorSettings from './TeamCreatorSettings/TeamCreatorSettings'

const TeamCreator = () => {
  return (
    <div className='teamCreator'>
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

      <div className='teamCreator-container'>
        <TeamCreatorSettings />

      </div>
    </div>
  )
}

export default TeamCreator