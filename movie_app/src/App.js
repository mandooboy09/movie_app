import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends React.Component {
  state = {
//    movies : [
//      {
//        title: "The Avengers : Assembled",
//        poster: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9955CF375BC73E4B11"
//      },
//      {
//        title: "The Avengers : Age of Ultron",
//        poster: "https://t1.daumcdn.net/cfile/tistory/2728D346553A278E1F"
//      },
//      {
//        title: "The Avengers : Infinity War",
//        poster: "http://mblogthumb3.phinf.naver.net/MjAxODAzMTdfMjg0/MDAxNTIxMjg3NzAzMTg1.mLEm2Mb0DqTK1i_rS7EiH_ah6itRtiT2Jfj5U8ghheQg.Ki0y0cVVDoKHmC7rIzSOMcTCYYRI50KNQplt1SybxMQg.JPEG.c106507/gallery-1521208645-infinity-war-poster.jpg?type=w2"
//      },
//      {
//        title: "The Avengers : End Game",
//        poster: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVYDl8.img?h=387&w=270&m=6&q=60&o=f&l=f&x=210&y=157"
//      }
//    ]    
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
          //...this.state.moives
          movies:[
          {
            title: "The Avengers : Assembled",
            poster: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9955CF375BC73E4B11"
          },
          {
            title: "The Avengers : Age of Ultron",
            poster: "https://t1.daumcdn.net/cfile/tistory/2728D346553A278E1F"
          },
          {
            title: "The Avengers : Infinity War",
            poster: "http://mblogthumb3.phinf.naver.net/MjAxODAzMTdfMjg0/MDAxNTIxMjg3NzAzMTg1.mLEm2Mb0DqTK1i_rS7EiH_ah6itRtiT2Jfj5U8ghheQg.Ki0y0cVVDoKHmC7rIzSOMcTCYYRI50KNQplt1SybxMQg.JPEG.c106507/gallery-1521208645-infinity-war-poster.jpg?type=w2"
          },
          {
            title: "The Avengers : End Game",
            poster: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVYDl8.img?h=387&w=270&m=6&q=60&o=f&l=f&x=210&y=157"
          },
          {
            title : "Doctor strange",
            poster : "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F25521A3B580F92BB29A65B"
          }
        ]

      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })

    return movies
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
