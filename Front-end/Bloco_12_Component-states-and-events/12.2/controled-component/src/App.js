import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.handleTextChange = this.handleChange.bind(this);
    
    this.state = {
      name: '',
      age: 0,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {

    return (
      <>
        <label htmlFor={'name'}>
          <input
          name='name'
          type='text' 
          onChange={this.handleChange}
          value={this.state.name}
          />
        </label>

        <label htmlFor={'age'}>
          <input
          name='age'
          type='number' 
          onChange={this.handleChange}
          value={this.state.age}
          />
        </label>
      </>
    )
  }
}

export default App;
