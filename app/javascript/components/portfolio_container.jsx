import React, { Component } from 'react';
import axios from 'axios';

import Search from './search';
import Portfolio from './portfolio';
import Calculate from './calculate';

class PortfolioContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
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

  handleClick = (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('data-id');
    const activeCurrency = this.state.search_results.filter(item => item.id == parseInt(id))
    this.setState({
      active_currency: activeCurrency[0],
      searchResults: []
    })
  }

  handleSubmit = (e) => {

  }

  render(){

    const searchOrCalculate = this.state.active_currency ?
    <Calculate handleChange={this.handleChange}
               handleSubmit={this.handleSubmit}
               activeCurrency={this.state.active_currency}
               amount={this.state.amount} />
               :
    <Search handleClick={this.handleClick}
            searchResults={this.state.search_results}
            handleChange={this.handleChange} />

    return(
      <div>
        {searchOrCalculate}
      </div>
    )
  }
}

export default PortfolioContainer;