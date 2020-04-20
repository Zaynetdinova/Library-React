import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import  MainPage  from '../pages/MainPage/MainPage'
import {Footer} from "../Common-components/Footer/Footer";
import './App.scss';

export default  class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/' component={MainPage} exact/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

