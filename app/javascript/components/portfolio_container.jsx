import React, { Component } from 'react';

class PortfolioContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ''
    }
  }

  render(){
    return(
      <div>Hellooo Boomer!</div>
    )
  }
}

export default PortfolioContainer;
