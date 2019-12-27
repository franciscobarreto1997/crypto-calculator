import React, { Component } from 'react';
import axios from 'axios';

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
    // this.setState({
    //   name: e.target.value
    // })

    axios.post('http://localhost:3000/search', {
      search: e.target.value
    }).then((data) => {
      console.log(data)
    }).catch((data) => {
      console.log(data)
    })
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
