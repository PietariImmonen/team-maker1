import React from 'react'
import './buttons.css'

const ButtonLarge = ({text}) => {
  return (
    <div className='button-large'>
        <p className='bl-text'>{text}</p>
    </div>
  )
}

export default ButtonLarge