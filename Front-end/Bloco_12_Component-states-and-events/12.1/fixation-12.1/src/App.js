import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      howManyClicks: 0,
    }
  }

  handleClick() {
    console.log(this.state.howManyClicks);

    this.setState((lastEstate, _props) => ({
      howManyClicks: lastEstate.handleClick += 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.howManyClicks}</button>
      </div>
    );
  }
}

export default App;
 