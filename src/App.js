import React, {Component} from 'react';
import './App.css';
import {CardList} from './Components/Card-List/Card-List';
import {SearchBox} from './Components/searchBox/searchBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
    .catch(err => console.error('Ocurrio un error', err));
  }
 
  render(){
    const { monsters, search } = this.state;
    const filteredMosters = monsters.filter( monster => {
      return monster.name.toLowerCase().includes(search.toLowerCase())
    })
    return(
    <div className="App">
      <SearchBox placeholder="Buscar" handleChange={e => this.setState({search: e.target.value})} />
      <CardList monsters ={filteredMosters} />
    </div>
    )}
}

export default App;
