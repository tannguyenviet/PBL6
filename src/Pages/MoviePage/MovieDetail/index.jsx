import React, { useContext, useEffect, useState } from "react";
import "./MovieDetail.scss";

import API from "../../../API";
import Context from "../../../Context/Context";
import TicketForm from "../../../components/Ticket/TicketForm";
import TrailerModal from "../../../components/Movie/TrailerModal";
import ShowTime from "../../../components/Movie/ShowTime";
import { useHistory } from "react-router-dom";

function MovieDetail(props) {
  const movieId = props.match.params.id;

  const history = useHistory();

  //GET STATUS: ON-OFF OF MODAL
  const context = useContext(Context);
  const { openModal, setOpenModal } = context;

  //States
  const [movieInfo, setMovieInfo] = useState();

  //GET MOVIE DETAIL API BY ID
  useEffect(() => {
    const getMovieById = async (id) => {
      try {
        const url = `/film/${id}`;
        const res = await API.get(url);
        if (res.status === 200) {
          setMovieInfo(res.data);
          console.log(res);
        }
      } catch (error) {
        console.log(error);
        history.push("/notfound");
      }
    };
    getMovieById(movieId);
    // eslint-disable-next-line
  }, [movieId]);

  //Functions
  const handleTrailerModal = (e) => {
    setOpenModal(true);
  };

  return (
    <>
      {movieInfo && (
        <section className="detail__section">
          <div className="detail__background"></div>
          <div className="container detail__container">
            <div className="detail__movie">
              <div className="detail__movie-img" onClick={handleTrailerModal}>
                <img src={movieInfo.image} alt="movie-img" />
                <div className="play-btn">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="detail__movie-info">
                <h3 className="detail__movie-name">{movieInfo.name}</h3>
                <div className="detail__movie-rating">
                  <span>Rating: </span>
                  <span>{movieInfo.rating}</span>
                  <i className="fas fa-star"></i>
                </div>
                <div className="detail__movie-genre">
                  <span>Genrers: </span>
                  {movieInfo.hashtag.split(",").map((genre) => (
                    <span key={genre}>{genre}</span>
                  ))}
                </div>
                <p className="detail__movie-datetime">
                  <span>
                    <i className="far fa-calendar-alt"></i>
                    <span>{movieInfo.time_release.slice(0, 10)}</span>
                  </span>
                  <span>
                    <i className="far fa-clock"></i>
                    <span>{movieInfo.duration} mins</span>
                  </span>
                  <span>
                    <i className="fas fa-globe-asia"></i>
                    <span>{movieInfo.country}</span>
                  </span>
                </p>
                <div className="detail__movie-director">
                  <span>Director:</span>
                  <span>{movieInfo.director}</span>
                </div>
                <div className="detail__movie-stars">
                  <span>Actors:</span>
                  <p>{movieInfo.stars}</p>
                </div>
                <div className="detail__movie-desc">
                  <span>Description:</span>
                  <p>{movieInfo.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <div className="ticket-form__section">
        <div className="container ticket-form__container">
          <TicketForm />
        </div>
      </div>
      <div className="showtime__section">
        <div className="container showtime__container">
          <ShowTime />
        </div>
      </div>
      {openModal && (
        <TrailerModal
          src={{ trailer: movieInfo.trailer, name: movieInfo.name }}
        />
      )}
    </>
  );
}

export default MovieDetail;
