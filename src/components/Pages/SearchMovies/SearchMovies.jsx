import React, { useState, useEffect } from "react";
import {
  MovieItem,
  MovieList,
  SearchContainer,
  SearchForm,
} from "./SearchMovies.styled";
import { Link, useLocation } from "react-router-dom";
import { searchMovies } from "ServicesApi/ServicesApi";

const SearchMovies = () => {
  const location = useLocation();

  const storedTerm = sessionStorage.getItem("searchTerm") || "";
  const storedResults = JSON.parse(sessionStorage.getItem("searchResults")) || [];

  const [term, setTerm] = useState(storedTerm);
  const [results, setResults] = useState(storedResults);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (term.trim() === "") {
      setResults([]);
      return;
    }

    const searchResults = await searchMovies(term);
    setResults(searchResults);

    sessionStorage.setItem("searchTerm", term);
    sessionStorage.setItem("searchResults", JSON.stringify(searchResults));
  };

  useEffect(() => {
    if (location.state && location.state.fromMoviesPage) {
      sessionStorage.removeItem("searchTerm");
      sessionStorage.removeItem("searchResults");
    }
  }, [location.state]);

  return (
    <SearchContainer>
      <h1>Search Movies</h1>
      <SearchForm onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter movie title..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchForm>
      <MovieList>
        {results.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieItem>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://taho.com.ua/image/cache/placeholder-335x200w.png.webp"}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </MovieItem>
          </Link>
        ))}
      </MovieList>
    </SearchContainer>
  );
};

export default SearchMovies;
