import React, { Component } from 'react';
import './App.css';
import Films from './Films'

class FilmList extends Component {
  constructor() {
    super();
    this.state = {
      filmList: []
    };
  }

  componentDidMount() {
    this.getFilms('https://swapi.co/api/films/');
  }

  getFilms = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ filmList: data.results });
        // console.log('banana', this.state.starwarsChars)
      })
      .catch(err => {
        throw new Error(err);
      });
  };



  render() {
    console.log(this.state.filmList)
    return (
      <div>
            <Films filmList={this.state.filmList}/>
      </div>
    );
  }
}

export default FilmList;