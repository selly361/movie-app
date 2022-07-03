import React, { useState } from "react";
import "../scss/MovieList.scss";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <div className="MovieContainer">
      {Array.isArray(movies) ? (
        <section>Total Search Results: {movies.length || 0}</section>
      ) : null}
      {Array.isArray(movies)
        ? movies.map((movie, index) => (
            <Link key={`${movie.Title}${index}`}  to={`/movie/${movie.imdbID}`}>
              <div  className="movie">
                <h1>
                  {movie.Title} ({movie.Year})
                </h1>

                <img src={movie.Poster} alt={movie.Title} />
              </div>
            </Link>
          ))
        : null}
    </div>
  );
}

export default MovieList;
