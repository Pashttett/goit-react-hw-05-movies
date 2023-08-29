import { Navigate, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Pages/Home/Home'));
const SearchMoviesPage = lazy(() => import('./Pages/SearchMovies/SearchMovies'));
const MoviesPage = lazy(() => import('./Pages/Movies/Movies'));
const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./FilmReviews.js/FilmReviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMoviesPage />} />
          <Route path="movies/:id" element={<MoviesPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};