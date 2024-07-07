import React from 'react';    
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  return(  
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      {/* 
      <SearchBox 
        className='monsters-search-box' 
        onChangeHandler={this.onSearchChange} 
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} /> 
      */}
    </div> 
  );
}

// Commented out class component for reference
// class App extends Component {
//   constructor() {
//     super();                
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((Response) => Response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState({ searchField }); 
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box' 
//           onChangeHandler={this.onSearchChange} 
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
                               