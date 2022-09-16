import React from 'react'
import '../NormalBall/normalBall.css'

const NormalBall = ({bg}) => {
  return (
    <div className='n-ball' style={{background: bg}}></div>
  )
}

export default NormalBall