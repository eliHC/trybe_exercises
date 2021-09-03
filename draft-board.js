import React from 'react';


function handleClick() {
  console.log('first dude');
} 

class Button extends React.Component {
  render() {
    return <button onClick={handleClick}>first one</button>
  }
}
