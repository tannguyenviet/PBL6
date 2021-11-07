import React, { useContext, useEffect, useState } from "react";
import "./MovieDetail.scss";

import { baseURLFake, API_KEY, IMG_URL } from "../../../API";
import Context from "../../../Context/Context";
import TicketForm from "../../../components/Ticket/TicketForm";
import TrailerModal from "../../../components/Movie/TrailerModal";
import ShowTime from "../../../components/Movie/ShowTime";

function MovieDetail(props) {
  const movieId = props.match.params.id;
  const context = useContext(Context);
  const { openModal, setOpenModal } = context;
  //States
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    const getMovieById = async (id) => {
      const res = await fetch(`${baseURLFake}movie/${id}?${API_KEY}`);
      const movieInfo = await res.json();
      setMovieInfo(movieInfo);
      // console.log(movieInfo);
    };
    getMovieById(movieId);
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
              <div className="detail__movie-img">
                <img
                  src={`${IMG_URL}${movieInfo.poster_path}`}
                  alt="movie-img"
                />
                <div className="play-btn" onClick={handleTrailerModal}>
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="detail__movie-info">
                <h3 className="detail__movie-name">{movieInfo.title}</h3>
                <div className="detail__movie-rating">
                  Rating: <span>{movieInfo.vote_average}</span>
                  <i className="fas fa-star"></i>
                </div>
                <div className="detail__movie-genre">
                  Genres:
                  {movieInfo.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </div>
                <div className="detail__movie-datetime">
                  <span>
                    <i className="far fa-calendar-alt"></i>{" "}
                    <span>{movieInfo.release_date}</span>
                  </span>
                  <span>
                    <i className="far fa-clock"></i>{" "}
                    <span>{movieInfo.runtime} mins</span>
                  </span>
                </div>
                <div className="detail__movie-desc">
                  <span>Description:</span>
                  <p>{movieInfo.overview}</p>
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
      {openModal && <TrailerModal id={movieInfo.id} />}
    </>
  );
}

export default MovieDetail;
