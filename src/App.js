import React, { Component } from "react";
import MoviesList from "./MovieList";
import MovieContext from "./MovieContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          movie_id: 1,
          title: "Harry Potter and the Sorcerers Stone",
          release_year: 2001,
        },
        {
          movie_id: 2,
          title: "Harry Potter and the Chamber of Secrets",
          release_year: 2002,
        },
        {
          movie_id: 3,
          title: "Harry Potter and the Prison of Azkaban",
          release_year: 2004,
        },
      ],
    };
  }
  render() {
    return (
      <MovieContext.Provider value={{ movies: this.state.movies }}>
        <MoviesList />
      </MovieContext.Provider>
    );
  }
}

export default App;
