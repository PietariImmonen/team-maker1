import React from 'react'
import './buttons.css'

const ButtonLarge = ({text}) => {
  return (
    <div className='button-large white'>
        <p className='bl-text'>{text}</p>
    </div>
  )
}

export default ButtonLarge