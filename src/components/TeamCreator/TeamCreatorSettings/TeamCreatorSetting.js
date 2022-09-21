import { Slider, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ButtonSmall from '../../Buttons/ButtonSmall'
import './teamcreatorSettings.css'

const TeamCreatorSetting = ({name, type, input, handleChange, addToArray, allGamers, length, clicked}) => {

    const [max, setMax] = useState(2)

    useEffect(() => {
        if(length>2) {
            setMax(length)
        }
    }, [length])


  return (
    <div className='teamCreator-setting'>
        <div className='setting-container'>
            <div className='setting-name'>
                <h3 className='setting-name-text'>{name}</h3>
            </div>
            {type==='number' && <Slider defaultValue={0} min={0} max={20} valueLabelDisplay="auto" value={input} onChange={handleChange}/>}
            {type==='team' && <Slider defaultValue={0} min={2} max={max} valueLabelDisplay="auto" value={input} onChange={handleChange}/>}
            {type==='member' &&
            <div className='textField-big'>
                <div>
                    {clicked===1 ?
                    <div className='textField-helper'>
                        <TextField id="standard-basic" label="Name" variant="standard" disabled sx={{width: '60%', fontFamily: 'Montserrat, sans-serif' }} value={input} onChange={handleChange}/>
                        <ButtonSmall text='New team?'/>
                    </div>
                    :
                    <div className='textField-helper'>
                        <TextField id="standard-basic" label="Name" variant="standard" sx={{width: '60%', fontFamily: 'Montserrat, sans-serif' }} value={input} onChange={handleChange}/>
                        <ButtonSmall text='Submit name' handleClick={addToArray}/>
                    </div>
                    }
                </div>
                {allGamers.map((i) => {
                        return(
                            <p className='textField-names' key={i}>{i}</p>
                        )
                })}
            </div>}
        </div>
    </div>
  )
}

export default TeamCreatorSetting