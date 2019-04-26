import React, { Component } from 'react';
import './App.css';
import CharsList from './components/StarWarsChars'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log('banana', this.state.starwarsChars)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // add a task to the list
  addChar = character => {
    // takes a chore string, copies the todos array and adds the new chore item object
    this.setState({
          starwarsChars: [
            ...this.state.starwarsChars,
            { character: character, id: Date.now() }
          ]
    });
};

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='list'>
          <CharsList addChar={this.addChar} />
        </div>
      </div>
    );
  }
}

export default App;
