import React, { Component } from 'react';


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  hundlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
  hundleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render () {
    console.log(this.state)
    return(
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinusButton}>-1</button>
      </React.Fragment>

    )
  }
}

export default App;
