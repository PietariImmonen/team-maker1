import React, { useState } from 'react'
import TeamCreatorSetting from './TeamCreatorSetting'
import './teamcreatorSettings.css'

const TeamCreatorSettings = () => {

    const [players, setPlayers] = useState(0)
    const [size, setSize] = useState(0)
    const [pname, setPname] = useState('')
    const [allGamers, setAll] = useState([])

    const handlePlayers = (e) => {
        setPlayers(e.target.value)
    }
    const handleSize = (e) => {
        setSize(e.target.value)
    }
    const handlePname = (e) => {
        setPname(e.target.value)
    }

    const addToArray = () => {
        setAll(cur => [...cur, pname])
    }

    console.log(players, size, pname, allGamers)

  return (
    <div className='teamCreator-setting-container'>
            <TeamCreatorSetting name={'Size of a team'} type='team' input={size} handleChange={handleSize}/>
            <TeamCreatorSetting name={'Names'} type='member' input={pname} handleChange={handlePname} addToArray={addToArray} allGamers={allGamers}/>
    </div>
  )
}

export default TeamCreatorSettings