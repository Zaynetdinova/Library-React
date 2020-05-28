import React from 'react'

import './Nav.scss'

import logo from '../../../assets/images/logo.svg'

export const Nav = () => {
  return (

    <div className='Nav'>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <img src={logo}/>
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Главная</a></li>
            <li><a href="#">O Библиотеке</a></li>
            <li><a className="active" href="#">Читателю</a></li>
            <li><a href="#">Преподавателю</a></li>
            <li><a href="#">Фотогалерея</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  )
}