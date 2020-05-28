import React from 'react'
import './SliderBooks.scss'
import Slider from "react-slick"
import CardBook from "../../../Common-components/CardBook/CardBook";

const testImg = 'https://images.unsplash.com/photo-1467951591042-f388365db261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'

const SliderBooks = () => {
  let settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className='Slider'>
      <Slider {...settings}>
        <div>
          <CardBook book={{title: 'Нобелевская премия', img: testImg}}/>
        </div>
        <div>
          <CardBook book={{title: 'Нобелевская премия', img: testImg}}/>
        </div>
        <div>
          <CardBook book={{title: 'Нобелевская премия', img: testImg}}/>
        </div>
        <div>
          <CardBook book={{title: 'Нобелевская премия', img: testImg}}/>
        </div>
      </Slider>
    </div>
  )
}

export default  SliderBooks