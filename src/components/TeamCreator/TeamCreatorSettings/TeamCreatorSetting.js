import { Slider, TextField } from '@mui/material'
import React from 'react'
import ButtonSmall from '../../Buttons/ButtonSmall'
import './teamcreatorSettings.css'

const TeamCreatorSetting = ({name, type, input, handleChange, addToArray, allGamers}) => {

  return (
    <div className='teamCreator-setting'>
        <div className='setting-container'>
            <div className='setting-name'>
                <h3 className='setting-name-text'>{name}</h3>
            </div>
            {type==='number' && <Slider defaultValue={0} min={0} max={20} valueLabelDisplay="auto" value={input} onChange={handleChange}/>}
            {type==='team' && <Slider defaultValue={0} min={0} max={20} valueLabelDisplay="auto" value={input} onChange={handleChange}/>}
            {type==='member' &&
            <div className='textField-big'>
                <div className='textField-helper'>
                    <TextField id="standard-basic" label="Name" variant="standard" sx={{width: '60%', fontFamily: 'Montserrat, sans-serif' }} value={input} onChange={handleChange}/>
                    <ButtonSmall text='Submit name' handleClick={addToArray}/>
                </div>
                {allGamers.map(i => {
                        return(
                            <p className='textField-names'>{i}</p>
                        )
                })}
            </div>}
        </div>
    </div>
  )
}

export default TeamCreatorSetting