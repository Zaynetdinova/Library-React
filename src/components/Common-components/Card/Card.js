import React from 'react'
import './Card.scss'

const Card = (title, img) => {

  const Background = {
    backgroundImage: `url("${img}")`
  }

  return (
    <div className='Card' style={Background}>
      <div className='card-shadow'></div>
      <div className='card-title'>
        {title}
      </div>
    </div>
  )
}

export default Card