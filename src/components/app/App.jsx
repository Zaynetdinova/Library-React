import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import  {CardPage, HomePage} from '../pages'

export default  class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/card' component={CardPage} exact/>
      </Switch>
    )
  }
}

