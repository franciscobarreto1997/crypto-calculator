import React, { Component } from 'react';

import PortfolioItem from './portfolio_item';

class Portfolio extends Component {
  constructor(props){
    super(props)

  }
  render(){

    let currencyValues = []
    const portfolioItems = this.props.portfolio.map((item) => {
      currencyValues = Object.values(item)
    })

    currencyValues.map((currency, index) => {
      return <PortfolioItem key={index} item={currency} />
    })

    const total = currencyValues.reduce((total, currency) => total + currency.value, 0)

    return(
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header">Your total portfolio value is:</div>
          <div className="portfolio-value--content">{total.toFixed(2)}$</div>
        </div>
        <div className="portfolio-items">
          {portfolioItems}
        </div>
      </div>
    )
  }
}

export default Portfolio;
