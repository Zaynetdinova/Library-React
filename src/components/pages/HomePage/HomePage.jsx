import React, {Component} from 'react';
import ItemContainer from "../blocks/Item/ItemContainer";
import { Link} from "react-router-dom";

export default class HomePage extends Component{

  constructor() {
    super();
  }
  render() {

    return (
      <div>
        <nav>
          <Link to='/card'>
            CardPage
          </Link>
        </nav>

        <ItemContainer/>
      </div>
    )
  }
}