import React from 'react'
import './buttons.css'

const ButtonLarge = ({text, handleClick}) => {
  return (
    <div className='button-large' onClick={handleClick}>
        <p className='bl-text'>{text}</p>
    </div>
  )
}

export default ButtonLarge