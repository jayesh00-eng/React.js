import React, { useState, useEffect } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=fc1387b5&s=${search}`
    );

    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]);
      alert("Movie not found");
    }
  };
useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=fc1387b5&s=avengers`
      );
      const data = await response.json();
      setMovies(data.Search);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            CYRO-SE
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </ul>
        </div>
          

          <form className="d-flex" onSubmit={searchMovie}>
            <input
              className="form-control me-2"
              placeholder="Search movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="btn btn-success">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.imdbID}>
              <div className="card">
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={movie.Title}
                />

                <div className="card-body">
                  <h5>{movie.Title}</h5>
                  <p>Year: {movie.Year}</p>
                  <p>Type: {movie.Type}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}