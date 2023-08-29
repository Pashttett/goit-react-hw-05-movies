import React, { useState } from "react";
import {
  MovieItem,
  MovieList,
  SearchContainer,
  SearchForm,
} from "./SearchMovies.styled";
import { Link } from "react-router-dom";
import { searchMovies } from "components/ServicesApi/ServicesApi";

const SearchMoviesPage = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const PlaceholderImage = () => (
    <img
      src="https://taho.com.ua/image/cache/placeholder-335x200w.png.webp"
      alt="No Poster Available"
    />
  );

  const handleSearch = async (e) => {
    e.preventDefault();

    if (term.trim() === "") {
      setResults([]);
      return;
    }

    const searchResults = await searchMovies(term);
    setResults(searchResults);
  };

  const renderMovies = () => {
    if (results.length === 0) {
      return <p>No movies found.</p>;
    }

    return (
      <MovieList>
        {results.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieItem>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <PlaceholderImage />
              )}
              <h2>{movie.title}</h2>
            </MovieItem>
          </Link>
        ))}
      </MovieList>
    );
  };

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
      {renderMovies()}
    </SearchContainer>
  );
};

export default SearchMoviesPage;
