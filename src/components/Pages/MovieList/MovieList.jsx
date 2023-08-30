// MovieList.js
import React from "react";
import { Link } from "react-router-dom";
import { MovieItem, MovieListWrapper } from "./MovieList.styled";

const MovieList = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieItem>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://taho.com.ua/image/cache/placeholder-335x200w.png.webp"
              }
              alt={movie.title}
            />
            <h2>{movie.title || movie.name}</h2>
          </MovieItem>
        </Link>
      ))}
    </MovieListWrapper>
  );
};

export default MovieList;
