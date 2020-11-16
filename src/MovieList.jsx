import React, { useContext } from "react";
import MovieContext from "./MovieContext";

const MoviesList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      {" "}
      Movie list :
      {movies.map((movie) => (
        <li>{movie.title}</li>
      ))}
    </div>
  );
};

export default MoviesList;
