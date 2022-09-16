import React from 'react'
import ButtonLarge from '../Buttons/ButtonLarge'
import ButtonLargeWhite from '../Buttons/ButtonLargeWhite'

const HeadingLinks = () => {
  return (
    <div className='headingLinks'>
        <h1>Make Being Drunk More EASY and FUN!</h1>
        <div className='hl-button-container'>
            <ButtonLarge text={'Try now!'} />
            <ButtonLargeWhite text={'Make a Team'}/>
        </div>
    </div>
  )
}

export default HeadingLinks