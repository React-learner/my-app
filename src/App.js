import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [
        {
         name: "Linda"
         },
       {
        name: "Frank"
       },
        {
        name: "Jacky"
       },
      ],

      }
    };
  }

  render():{;
    return (
      <div className="App">   
  {
    this.state.monsters.map( monsters) => {
    })}
    return<h1>{mosnters.name</h1>;
  }
     </div>
    )
  }
}

export default App;