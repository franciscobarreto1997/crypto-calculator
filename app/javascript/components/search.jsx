import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props)

  }
  render(){
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
      </div>
    )
  }
}

export default Search;
