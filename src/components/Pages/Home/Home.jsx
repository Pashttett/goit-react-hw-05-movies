import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeContainer, MovieList, MovieItem, NavLinkBlock } from "./Home.styled";
import { fetchPopularMovies } from "ServicesApi/ServicesApi";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);

    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };

    getMovies();
  }, [scrollPosition]);

  const handleNavLinkClick = () => {
    setScrollPosition(window.scrollY);
  };

  return (
    <HomeContainer>
      <h1>Popular Movies:</h1>
      <MovieList>
        {movies.map((movie) => (
          <NavLinkBlock
            key={movie.id}
            to={`/movies/${movie.id}`}
            onClick={handleNavLinkClick}
          >
            <MovieItem>
              <Link className="NavLinkBlock" to={`/movies/${movie.id}`}>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://taho.com.ua/image/cache/placeholder-335x200w.png.webp"}
                alt={movie.title}
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
