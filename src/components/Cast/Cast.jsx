import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getFilmCastByID } from "components/ServicesApi/ServicesApi";
import Loader from "components/Loader/Loader";
import { CastContainer, CastList, CastItem, CastImage, CastName } from "./CastStyle";

const Cast = ({ filmId }) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getFilmCastByID(filmId);
        if (castData && castData.cast) {
          setCast(castData.cast);
        }
      } catch (error) {
   console.error("An error occurred while fetching cast:", error);
      }
      setLoading(false);
    };

    fetchCast();
  }, [filmId]);

  return (
    <CastContainer>
      <h2>Cast</h2>
      {loading ? (
        <Loader />
      ) : cast.length === 0 ? (
<p>Actors details are unavailable.</p>
      ) : (
        <CastList>
          {cast.map((actor) => (
            <CastItem key={actor.id}>
              <CastImage
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://taho.com.ua/image/cache/placeholder-335x200w.png.webp"
                }
                alt={actor.name}
              />
              <CastName>{actor.name}</CastName>
            </CastItem>
          ))}
        </CastList>
      )}
    </CastContainer>
  );
};

Cast.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default Cast;
