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
    axios.post('http://localhost:3000/search', {
      search: e.target.value
    }).then((data) => {
      this.setState({
        search_results: [...data.data.currencies]
      })
    }).catch((data) => {
      console.log(data)
    })
  }

  render(){
    return(
      <div>
        <Search searchResults={this.state.search_results} handleChange={this.handleChange} />
        <Calculate />
      </div>
    )
  }
}

export default PortfolioContainer;
