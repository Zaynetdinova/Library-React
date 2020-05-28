import React from 'react'
import {Loader} from "../../../../Common-components/loader/Loader"
import Card from "../../../../Common-components/Card/Card"

import './NewExhibitions.scss'
import {Link} from "react-router-dom";

export const NewExhibitions = ({exhibitions}) => {

  if (exhibitions.length) {
    return (
      <div className='New-exhibitions'>
      <h4 className='main-title'>Новые выставки</h4>
      <div className='content'>
        {exhibitions.map((item) => {
          const {id, title, img} = item
          return (
            <div className='block-wrapper' key={id}>
                <Link to='/exhibition-view'>
                {Card(title, img)}
                </Link>
            </div>
          )
        })}
      </div>
      </div>
    )
  } else {
    return (
      <div><Loader/></div>
    )
  }
}