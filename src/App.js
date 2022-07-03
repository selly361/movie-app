import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "./Components/MovieList";
import { Route, Routes } from "react-router-dom";
import Movie from "./Components/Movie";

function App() {
  
  const [url, setUrl] = useState(
    "http://www.omdbapi.com/?s=avengers&apikey=d4d30b5f"
  );

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.Search);
    });
  }, [url]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <input
                className="SearchInput"
                onChange={(e) =>
                  e.target.value &&
                  setUrl(
                    `http://www.omdbapi.com/?s=${e.target.value}&apikey=d4d30b5f`
                  )
                }
              />
              <MovieList movies={movies} />
            </>
          }
        />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;

//http://www.img.omdbapi.com/?i=tt3896198&apikey=d4d30b5f
