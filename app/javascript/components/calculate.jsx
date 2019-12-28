import React, { Component } from 'react';

class Calculate extends Component {
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div>
        <h1>How much {this.props.active_currency} do you own?</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>Enter amount owned:</label><br/>
            <input autoComplete="off" type="text" name="name" placeholder="How much do you own?"
             value={this.props.amount}
             className="field" onChange={this.props.handleChange}/>
          </div>
          <div className="form-group">
            <input type="submit" className="calculate-btn" value="Calculate my total">
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default Calculate;
