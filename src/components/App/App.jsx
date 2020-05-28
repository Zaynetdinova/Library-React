import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import  MainPage  from '../pages/MainPage/MainPage'
import {Footer} from "../Common-components/Footer/Footer";
import './App.scss';
import {Nav} from "../Common-components/Nav/Nav";
import ExhibitionView from "../pages/ExhibitionView/ExhibitionView";

export default  class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-route'>
          <div>
            <Nav/>
          </div>
          <Switch>
            <Route path='/' component={MainPage} exact/>
            <Route path='/exhibition-view' component={ExhibitionView} exact/>
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}

