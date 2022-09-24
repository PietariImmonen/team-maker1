import React from 'react'
import ButtonLarge from '../Buttons/ButtonLarge'
import ButtonLargeWhite from '../Buttons/ButtonLargeWhite'
import { Link } from 'react-router-dom'

const HeadingLinks = () => {
  return (
    <div className='headingLinks'>
        <h1>Make Being Drunk More EASY and FUN!</h1>
        <div className='hl-button-container'>
          <Link to={'/'}>
            <ButtonLarge text={'Try now!'} />
          </Link>
          <Link to={'/team'}>
            <ButtonLargeWhite text={'Make a Team'}/>
          </Link>
        </div>
    </div>
  )
}

export default HeadingLinks