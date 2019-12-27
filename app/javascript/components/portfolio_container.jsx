import React, { Component } from 'react';

import Search from './search';
import Portfolio from './portfolio';
import Calculate from './calculate';

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

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })

    console.log(this.state.name)
  }

  render(){
    return(
      <div>
        <Search handleChange={this.handleChange} />
        <Calculate />
      </div>
    )
  }
}

export default PortfolioContainer;
