import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this);
    
    this.state = {
      howManyBlinks: 0,
    }
  }

  handleTextChange(event) {
    this.setState({
      howManyBlinks: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <select>xx</select>
        <input 
        name='howManyBlinks'
        type='number' 
        onChange={this.handleTextChange}
        value={this.state.howManyBlinks}
        >
        </input>
        <input type='checkbox'></input>
        <textarea>area pra texto</textarea>
      </div>
    )
  }
}

export default App;
