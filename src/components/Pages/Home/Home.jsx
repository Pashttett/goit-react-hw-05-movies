import React, { useEffect, useState } from "react";
import { HomeContainer } from "./Home.styled";
import MovieList from "../MovieList/MovieList";
import { fetchPopularMovies } from "ServicesApi/ServicesApi";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [scrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);

    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };

    getMovies();
  }, [scrollPosition]);


  return (
    <HomeContainer>
      <h1>Popular Movies:</h1>
      <MovieList movies={movies} />
    </HomeContainer>
  );
};

export default Home;
