import React, { useEffect, useState } from "react";
import { getFilmReviewsByID } from "components/ServicesApi/ServicesApi";
import {
  FilmReviewsContainer,
  FilmReviewItem,
  FilmReviewAuthor,
  FilmReviewContent,
} from "./FilmReviews.styled";
import Loader from "components/Loader/Loader";
import PropTypes from "prop-types";

const FilmReviews = ({ filmId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getFilmReviewsByID(filmId);
        if (reviewsData && reviewsData.results) {
          setReviews(reviewsData.results);
        }
      } catch (error) {
console.error("Failed to fetch reviews:", error);
      }
      setLoading(false);
    };

    fetchReviews();
  }, [filmId]);

  if (loading) {
    return <Loader />;
  }

  if (reviews.length === 0) {
<p>There are no reviews to display.</p>
  }

  return (
    <FilmReviewsContainer>
      <h2>Film Reviews</h2>
      <div>
        {reviews.map((review) => (
          <FilmReviewItem key={review.id}>
            <FilmReviewAuthor>{review.author}</FilmReviewAuthor>
            <FilmReviewContent>{review.content}</FilmReviewContent>
          </FilmReviewItem>
        ))}
      </div>
    </FilmReviewsContainer>
  );
};

FilmReviews.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default FilmReviews;
