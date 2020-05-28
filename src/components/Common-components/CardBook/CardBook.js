import React from 'react'
import './CardBook.scss'

const CardBook = (props) => {
  const {title, img} = props.book

  const Background = {
    backgroundImage: `url("${img}")`
  }

  return (
    <div className='Card-book' >
      <div style={Background} className='book-image'></div>
      <div className='card-title'>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default CardBook