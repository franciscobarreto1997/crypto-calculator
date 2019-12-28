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
      searchResults: [],
      activeCurrency: null,
      amount: ''
    }
  }

  handleChange = (e) => {
    const input = e.target.value
    axios.post('http://localhost:3000/search', {
      search: input
    }).then((data) => {
      if (input == "") {
        this.setState({
          searchResults: []
        })
      } else {
        this.setState({
          searchResults: [...data.data.currencies]
        })
      }
    }).catch((data) => {
      console.log(data)
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('data-id');
    const activeCurrency = this.state.searchResults.filter(item => item.id == parseInt(id))
    this.setState({
      activeCurrency: activeCurrency[0],
      searchResults: []
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let currency = this.state.activeCurrency
    let amount = this.state.amount

    axios.post('http://localhost:3000/calculate', {
      id: currency.id,
      amount: amount
    }).then((data) => {
      this.setState({
        amount: '',
        activeCurrency: null,
        portfolio: [...this.state.portfolio, data.data]
      })
    }).catch((data) => {
      console.log(data)
    })
  }

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  render(){

    const searchOrCalculate = this.state.activeCurrency ?
    <Calculate handleChange={this.handleAmount}
               handleSubmit={this.handleSubmit}
               activeCurrency={this.state.activeCurrency}
               amount={this.state.amount} />
               :
    <Search handleClick={this.handleClick}
            searchResults={this.state.searchResults}
            handleChange={this.handleChange} />

    return(
      <div className="grid">
        <div className="left">
          {searchOrCalculate}
        </div>
        <div className="right">
          <Portfolio portfolio={this.state.portfolio}/>
        </div>
      </div>
    )
  }
}

export default PortfolioContainer;
