import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Movie from "./Movie.js";

class App extends React.Component {
  state = {}
  
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} />
    })

    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    console.log(movies)
    this.setState({
      movies
    })  
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){
    return ( 
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading" }
      </div>
    );
  }
}

export default App;
