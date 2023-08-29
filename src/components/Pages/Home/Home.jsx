import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeContainer, MovieList, MovieItem, NavLinkBlock } from "./Home.styled";
import { fetchPopularMovies } from "components/ServicesApi/ServicesApi";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };

    getMovies();
  }, []);

  return (
    <HomeContainer>
      <h1>Popular Movies:</h1>
      <MovieList>
        {movies.map((movie) => (
          <NavLinkBlock key={movie.id} to={`/movies/${movie.id}`}>
            <MovieItem>
              <Link className="NavLinkBlock" to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <h2>{movie.title || movie.name}</h2>
              </Link>
            </MovieItem>
          </NavLinkBlock>
        ))}
      </MovieList>
    </HomeContainer>
  );
};

export default Home;
