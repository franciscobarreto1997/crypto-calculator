import React, { Component } from 'react';

import PortfolioItem from './portfolio_item';

class Portfolio extends Component {
  constructor(props){
    super(props)

  }
  render(){

    const portfolioItems = this.props.portfolio.map((item, index) => {
      return <PortfolioItem key={index} item={item} />
    })

    const total = this.props.portfolio.reduce((total, currency) => total + currency.value, 0)

    return(
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header">Your total portfolio value is:</div>
          <div className="portfolio-value--content">{total.toFixed(2)}</div>
        </div>
        <div className="portfolio-items">
          {portfolioItems}
        </div>
      </div>
    )
  }
}

export default Portfolio;
