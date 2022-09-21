import React, { useEffect, useState } from 'react'
import Team from './Team'
import './teamcreatorSettings.css'

const Teams = ({name, players, clicked}) => {

    const [teams, setTeams] = useState([])

    useEffect(() => {setTeams(players)}, [players])

  return (
    <div className='teams-container'>
         <div className='setting-name'>
                <h3 className='setting-name-text'>{name}</h3>
        </div>
        <div className='teams-helper-container'>
            {clicked===1 && teams.map(i => {
                return (
                    <Team team={i} key={i}/>
                )
            })}
        </div>
    </div>
  )
}

export default Teams