import React, { Component } from 'react';
import axios from 'axios';

import PortfolioContainer from './portfolio_container'

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

class App extends Component {
  render(){
    return(
      <PortfolioContainer />
    )
  }
}

export default App;
