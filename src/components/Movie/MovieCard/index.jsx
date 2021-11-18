import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieCard.scss";
import Context from "../../../Context/Context";

function MovieCard(props) {
  const history = useHistory();

  //Get context to set ON-OFF modal
  const context = useContext(Context);
  const { setOpenModal } = context;

  const { movieInfo, setTrailerSrc } = props;
  const { id, name, image, rating, trailer } = movieInfo;

  //Open - Close Modal
  const handleTrailerModal = (e, trailer, name) => {
    e.stopPropagation();
    setOpenModal(true);
    setTrailerSrc({ trailer, name });
  };

  //Move to movie detai
  const handleMovieCardClicked = (e, movieId) => {
    history.push(`/movie/detail/${movieId}`);
  };

  return (
    <div className="movie__item" onClick={(e) => handleMovieCardClicked(e, id)}>
      <div className="movie__item-img">
        <img src={image} alt="movie-poster" />
      </div>
      <div className="movie__item-content">
        <div className="movie__item-info">
          <h3 className="movie__item-title">{name}</h3>
          <h5 className="movie__item-rating">
            {rating}
            <i className="fas fa-star"></i>
          </h5>
        </div>
        <div className="movie__item-options">
          <div
            className="movie__item-btn btn-trailer"
            onClick={(e) => handleTrailerModal(e, trailer, name)}
          >
            Trailer
          </div>
          <div className="movie__item-btn btn-buy">
            <Link to={`/movie/detail/${id}`}>Buy Ticket</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.object,
  setTrailerSrc: PropTypes.func,
};

MovieCard.defaultProps = {
  movieInfo: {},
  setTrailerSrc: null,
};

export default MovieCard;
