import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props)

  }
  render(){
    const searchResults = this.props.searchResults.map(currency => {
      return(
        <li key={currency.id} data-id={currency.id} onClick={this.props.handleClick} className="currency-list-item">
          <a href="#" className="currency">
            <span>{currency.name}</span>
            <span>{currency.currency_symbol}</span>
          </a>
        </li>
      )
    })
    return(
      <div>
        <h1>Cryptocurrency Portfolio Calculator</h1>
        <form>
          <div className="form-group">
            <label>Search for a currency:</label><br/>
            <input autoComplete="off" type="text" name="name" placeholder="Ex:
             Bitcoin, Litecoin, Ethereum.." value={this.props.name}
             className="field" onChange={this.props.handleChange}/>
          </div>
        </form>
        <div className="currency-list">
          {searchResults}
        </div>
      </div>
    )
  }
}

export default Search;
