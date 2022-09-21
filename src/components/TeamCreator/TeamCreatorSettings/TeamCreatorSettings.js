import React, { useState } from 'react'
import ButtonLarge from '../../Buttons/ButtonLarge'
import TeamCreatorSetting from './TeamCreatorSetting'
import './teamcreatorSettings.css'
import Teams from './Teams'

const TeamCreatorSettings = () => {

    const [players, setPlayers] = useState(0)
    const [size, setSize] = useState(2)
    const [pname, setPname] = useState('')
    const [allGamers, setAll] = useState([])
    const [helperArr, setHelperArr] = useState([])
    const [clicked, setClicked] = useState(0)

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
        setHelperArr(cur => [...cur, pname])
        setPname('')
    }

    const shuffleArray = ()  => {
        for (let i = helperArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [helperArr[i], helperArr[j]] = [helperArr[j], helperArr[i]];
        }
    }

    function sliceIntoChunks() {
        if(allGamers.length > 1 && clicked<1) {
        shuffleArray()
        const res = [];
        for (let i = 0; i < helperArr.length; i += size) {
            const chunk = helperArr.slice(i, i + size);
            res.push(chunk);
        }
        setHelperArr(res)
        setAll([])
        setClicked(1)
    }
    }
    console.log(size)
    console.log(clicked)

    

  return (
    <div className='teamCreator-setting-container'>
            <TeamCreatorSetting name={'Size of a team'} type='team' input={size} handleChange={handleSize} length={allGamers.length}/>
            <TeamCreatorSetting name={'Names'} type='member' input={pname} handleChange={handlePname} addToArray={addToArray} allGamers={allGamers} length={allGamers.length} clicked={clicked}/>
            <ButtonLarge text={'Generate!'} handleClick={sliceIntoChunks}/>
            <Teams name={'Teams'} players={helperArr} clicked={clicked}/>
    </div>
  )
}

export default TeamCreatorSettings