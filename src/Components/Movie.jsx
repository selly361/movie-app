import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../scss/Movie.scss'


function Movie() {
  const { id } = useParams();

  const [url, setUrl] = useState(
    `http://www.omdbapi.com/?i=${id}&apikey=d4d30b5f`
  );

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className='MovieWrap'>
        <button className="backButton">Back</button>
      <div className="image">
        <img src={movie.Poster} alt={`${movie.Title}`} />
      </div>

      <div className="description">
        <h1 className='title'><b>Movie Title:</b> {movie.Title}</h1>
        <p className="year"><b>Year:</b> {movie.Year}</p>
        <p className="genre"><b>Genre:</b> {movie.Genre}</p>
        <p className="released"><b>Released Date:</b> {movie.Released}</p>
        <p className="rating"><b>Rating:</b> {movie.imdbRating}</p>
        <p className="plot"><b>Description:</b> {movie.Plot}</p>
      </div>

    </div>
  );
}

export default Movie;
