import React, {Component} from 'react';
import { connect } from 'react-redux'

class CardPage extends Component{

  constructor({items, onIncrease}) {
    super();
    this.state = {
      test: items
    }
  }
  render() {
    const { items } = this.props
    console.log(items)
    return (
      <div>
        <button onClick={this.props.onIncrease}></button>
      </div>
    )
  }
}

const mapStateToProps = ({ cartItems, orderTotal}) => {
  return {
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = () => {
  return {
    onIncrease: () => {
      console.log(`Increase1`)
    },

    onDecrease: (id) => {
      console.log(`Decrease${id}`)
    },

    onDelete: (id) => {
      console.log(`Delete${id}`)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPage)