import React, {Component} from 'react';
import './App.css';
import {CardList} from './Components/Card-List/Card-List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
    .catch(err => console.error('Ocurrio un error', err));
  }
 
  render(){
    return(
    <div className="App">
      <CardList monsters ={this.state.monsters} />
    
    </div>
    )}
}

export default App;
