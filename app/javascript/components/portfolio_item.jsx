import React, { Component } from 'react';

class PortfolioItem extends Component {
  constructor(props){
    super(props)

  }
  render(){
    console.log(this.props.item)
    return(
      <div>
        <div className="row">
          <div className="col">
            <div className="header">Currency:</div>
            <div className="text">{this.props.item.currency.name}</div>
          </div>
          <div className="col">
            <div className="header">Currency Price:</div>
            <div className="text">${this.props.item.current_price}</div>
          </div>
          <div className="col">
            <div className="header">Amount in your portfolio:</div>
            <div className="text">{this.props.item.amount}</div>
          </div>
          <div className="col">
            <div className="header">Current Value:</div>
            <div className="text">{this.props.item.value}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioItem;
