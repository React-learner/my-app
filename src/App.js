javascript

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users');
    then(response => response.json()
  ) .then(users => this.setState({ monsters: users }));
}

   


render() {
  return (
    <div className='App'>
      <input
        className='search'
        type='search'
        placeholder='search monsters'
        onChange={(event) => {
          console.log(event.target.value);
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.includes(event.target.value);
          });
        }}
      />
      {this.state.monsters.map((monster) => (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      ))}
    </div>
  );
}