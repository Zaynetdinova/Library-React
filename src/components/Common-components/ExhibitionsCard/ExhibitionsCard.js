import React from 'react'

import './ExhibitionsCard.scss'

const ExhibitionsCard = ({exhibition}) => {
  console.log(exhibition)
  const {img, title} = exhibition
  const Background = {
    backgroundImage: `url("${img}")`
  }
  return (
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <div style={Background} className="card-img activator"></div>
        </div>
        <div className="card-content">
          <div className='wrapper-title'>
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <i className="activator material-icons right">more_vert</i>
          </div>
          <p><a href="#">Посмотреть</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>
  )
}

export default ExhibitionsCard