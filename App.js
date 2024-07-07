import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []    
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=>Response.json())
    .then ((users) => this.setState(()=>{
      return{monsters,users}
    },
    ()=>{
    console.log(this.state)
    }
    ))
  
  render() {;
    return (
      <div className='App'>
      <input className='search'
       type='search'
        placeholder='search monsters' 
        onChange={(Event)} => {
          console.log(Event,target.value);
          //[{name:Leanne},{name:Yihua}]
          const filteredMonsters = this.state.monster.filter((monster)>={
          monster.name.includes(Event.target.value );

          );
        }}
        {this.state.monsters.map(monster => {
        return ()
       <div key={monster.id}>
         <h1>key={monster.name}>{monster.name}</h1>
         </div> 
        );
  
        }
      }
    }

export default App;  
