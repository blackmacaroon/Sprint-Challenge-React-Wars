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
        // console.log('banana', this.state.starwarsChars)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // add a character to the list
  // addChar = () => {
  //   // takes a string, copies the starwarscharacters array and adds the new character item object
  //   this.setState({
  //         starwarsChars: [
  //           ...this.state.starwarsChars,
  //           { id: Date.now() }
  //         ]
  //   });
  // };

 



  render() {
    console.log(this.state.starwarsChars)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='list'>
          <CharsList starwarsChars={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
