import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieCard.scss";
import { IMG_URL } from "../../../API";
import Context from "../../../Context/Context";

function MovieCard(props) {
  const history = useHistory();

  //Get context to set ON-OFF modal
  const context = useContext(Context);
  const { setOpenModal } = context;

  const { movieInfo, setModalVideoId } = props;
  const {
    id: movieId,
    original_title: title,
    vote_average: rating,
    poster_path: poster,
  } = movieInfo;

  //Open - Close Modal
  const handleTrailerModal = (e, movieId) => {
    e.stopPropagation();
    setOpenModal(true);
    setModalVideoId(movieId);
  };

  const handleMovieCardClicked = (e, movieId) => {
    history.push(`/movie/detail/${movieId}`);
  };

  return (
    <div
      className="movie__item"
      onClick={(e) => handleMovieCardClicked(e, movieId)}
    >
      <div className="movie__item-img">
        <img src={`${IMG_URL}${poster}`} alt="movie-poster" />
      </div>
      <div className="movie__item-content">
        <div className="movie__item-info">
          <h3 className="movie__item-title">{title}</h3>
          <h5 className="movie__item-rating">
            {rating}
            <i className="fas fa-star"></i>
          </h5>
        </div>
        <div className="movie__item-options">
          <div
            className="movie__item-btn btn-trailer"
            onClick={(e) => handleTrailerModal(e, movieId)}
          >
            Trailer
          </div>
          <div className="movie__item-btn btn-buy">
            <Link to={`/movie/detail/${movieId}`}>Buy Ticket</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
// http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg

MovieCard.propTypes = {
  movieInfo: PropTypes.object,
  setModalSource: PropTypes.func,
};

MovieCard.defaultProps = {
  movieInfo: {},
  setModalSource: null,
};

export default MovieCard;
