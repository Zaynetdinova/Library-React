import React from 'react'
import './ExhibitionsContent.scss'
import SliderBooks from "./SliderBooks";

import photo from '../../../../assets/images/test/photo.jpg'


const ExhibitionContent = () => {
  return (
    <div className='Exhibition-content'>
      <section className='header'>
          <div className='title'>Солдаты родины моей</div>
        <div className='Com-Flex-center count-view'>
          <span className='time'>12 июня 2020</span>
          &nbsp; / &nbsp;
          <i className="material-icons">remove_red_eye</i>
          <div className='count'>12</div>
        </div>
      </section>

      <section className='description'>
          <p>Нобелевская премия была учреждена промышленником, изобретателем и инженером-химиком из Швеции, Альфредом Нобелем, и названа в его честь. Она считается самой престижной в мире. Первая Нобелевская премия по литературе была вручена 10 декабря 1901 года, и с тех пор выдается ежегодно в эту дату, являющуюся годовщиной смерти Нобеля. Награждение победителей происходит в Стокгольме самим шведским королем. После получения награды лауреаты Нобелевской премии по литературе должны в течение 6 месяцев выступить с лекцией на тему своей работы. Это непременное условие получения награды. Наша выставка знакомит читателей с произведениями лауреатов.</p>
          <img className='z-depth-5' src={photo}/>
      </section>

      <section className='slider-wrapper'>
        <SliderBooks/>
      </section>
    </div>
  )
}

export default  ExhibitionContent