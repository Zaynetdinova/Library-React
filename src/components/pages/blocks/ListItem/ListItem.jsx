import React,{Component} from "react";

export default class ListItem extends Component{

  constructor() {
    super();
  }

  render() {
    const {book} = this.props
    return (
      <React.Fragment>
        <span>{book.title}</span>
      </React.Fragment>
    )
  }
}