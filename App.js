import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
          id: '12e1231e',
        },
        {
          name: "Frank",
          id: ' 12ed2dacs ',
        },
        {
          name: "Jacky",
          id: '1231e',
        },
        {
          Name:"Andrei",
          id :'12e1231e',
        },
      ]
    };
  }
 
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => (
          <h1 key={monster.name}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;