import React, { useEffect, useState } from 'react'

const Team = ({team}) => {

  const [players, setPlayers] = useState([])

    useEffect(() => {
      setPlayers(team)
    }, [team])
    

  return (
    <div className='team-container'>
      {players.length < 2 ? <p className='player-name'>- {team}</p> : players.map(i => {
          return (
            <p className='player-name' key={i}>- {i}</p>
          )
        })}
    </div>
  )
}

export default Team