import React from 'react'

const ButtonSmall = ({text, handleClick}) => {
  return (
    <div className='button-small' onClick={handleClick}>
        <p className='bs-text'>{text}</p>
    </div>
  )
}

export default ButtonSmall