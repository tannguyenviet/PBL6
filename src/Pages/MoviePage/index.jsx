import React, { useRef, useState, useEffect, useContext } from "react";
import Banner from "../../components/Layouts/Banner";
import "./MoviePage.scss";

import { baseURLFake, API_KEY } from "../../API";
import Context from "../../Context/Context";
import TrailerModal from "../../components/Movie/TrailerModal";
import MovieCard from "../../components/Movie/MovieCard";

const subtitle =
  "Your favorite movies, now playing, comming soon movies, movie genres and much more";

function MovieList(props) {
  const [listType, setListType] = useState("now_playing");
  const [movieList, setMovieList] = useState([]);
  const [modalVideoId, setModalVideoId] = useState(); //Get movide id to pass into TrailerModel
  const context = useContext(Context);
  const { openModal } = context;
  const tabRef = useRef();

  //GET MOVIE API SHOW IN GALLERY
  useEffect(() => {
    const getNowPlayingList = async () => {
      const res = await fetch(`${baseURLFake}movie/${listType}?${API_KEY}`);
      const data = await res.json();
      const nowPlayingList = data.results;
      setMovieList(nowPlayingList);
    };
    getNowPlayingList();
  }, [listType]);

  const handleTabActive = (e) => {
    const tabUnderline = tabRef.current;
    const tabWidth = e.target.offsetWidth;
    tabUnderline.style.transform = `translateX(${
      e.target.dataset.index * tabWidth
    }px)`;
    if (e.target.dataset.index === "1") {
      setListType("upcoming");
    } else {
      setListType("now_playing");
    }
  };

  return (
    <>
      <Banner animate={false} subtitle={subtitle} page="movie" />
      <section className="gallery__section">
        <div className="container gallery__container">
          <div className="gallery__bar">
            <div
              className="gallery__tab"
              data-index="0"
              onClick={handleTabActive}
            >
              Now Showing
            </div>
            <div
              className="gallery__tab"
              data-index="1"
              onClick={handleTabActive}
            >
              Comming soon
            </div>
            <div className="gallery__underline" ref={tabRef}></div>
          </div>
          <ul className="gallery__list">
            {movieList &&
              movieList.map((movie) => (
                <div className="gallery__item" key={movie.id}>
                  <MovieCard
                    movieInfo={movie}
                    setModalVideoId={setModalVideoId}
                  />
                </div>
              ))}
          </ul>
        </div>
      </section>
      {openModal && <TrailerModal id={modalVideoId} />}
    </>
  );
}

export default MovieList;
