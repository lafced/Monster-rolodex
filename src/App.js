import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component'



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField: ''
        
    };
    
  }
//sert à dowload le data d'un json et set le state du json
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters:users }));

  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }


  render() {
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())) 
    return (
      <div className="App">
        <h1 id='manwork'> Monsters Rolodex </h1>
        <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList> 
      </div>
    );
  }
}




export default App;
