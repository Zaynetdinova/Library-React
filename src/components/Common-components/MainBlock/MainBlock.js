import React from 'react'
import './MainPage.scss'
import book from '../../../assets/images/book.png'
import book1 from '../../../assets/images/book1.png'
import brain from '../../../assets/images/brain.png'
import Search from '../Search/Search'


export const MainBlock = (props) => {
  return (
    <div className='Main-Block'>
      <div className='Main-Block-root'>
        <div className='main-title'>
          <div>
            <h4>ВИРТУАЛЬНАЯ КНИЖНАЯ ВЫСТАВКА</h4>
            <div className='search-wrapper'>
              <Search/>
            </div>
          </div>
          <img className='title-img' src={book}/>
        </div>

       {/*<div className='additional-draw'>*/}
       {/*  <img src={book1}/>*/}
       {/*  <img src={brain}/>*/}
       {/*</div>*/}

      </div>
    </div>
  )
}