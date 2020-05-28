import React from 'react'
import './AllExhibitions.scss'
import ExhibitionsCard from "../../../../Common-components/ExhibitionsCard/ExhibitionsCard";

export const AllExhibitions = ({allExhibitions}) => {

  return (
    <div className='All-exhibitions'>
      <h4>Все выставки</h4>
      <div className='content'>
        {allExhibitions.map((exhibition, index) => {
          return (
            <div key={index} className='content-block'>
              <ExhibitionsCard exhibition={exhibition}/>
            </div>
          )
        })}
      </div>
    </div>
  )

}