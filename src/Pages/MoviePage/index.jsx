import React, { useRef, useState, useEffect, useContext } from "react";
import Banner from "../../components/Layouts/Banner";

import API from "../../API";
import Context from "../../Context/Context";
import TrailerModal from "../../components/Movie/TrailerModal";
import MovieCard from "../../components/Movie/MovieCard";
import Pagination from "../../components/Pagination";
import "./MoviePage.scss";

const subtitle =
  "Your favorite movies, now playing, comming soon movies, movie genres and much more";

function MovieList(props) {
  //States
  const [listMovieType, setListMovieType] = useState("now-playing");
  const [movieList, setMovieList] = useState([]);
  const [trailerSrc, setTrailerSrc] = useState();

  const context = useContext(Context);
  const { openModal } = context;

  const tabRef = useRef();

  //GET MOVIE API SHOW IN GALLERY
  useEffect(() => {
    const getMovieList = async (type) => {
      try {
        const url = `/film/${type}`;
        const res = await API.get(url);
        if (res.status === 200) {
          setMovieList(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovieList(listMovieType);
  }, [listMovieType]);

  const handleTabActive = (e) => {
    const tabUnderline = tabRef.current;
    const tabWidth = e.target.offsetWidth;
    tabUnderline.style.transform = `translateX(${
      e.target.dataset.index * tabWidth
    }px)`;
    if (e.target.dataset.index === "1") {
      setListMovieType("up-coming");
    } else {
      setListMovieType("now-playing");
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
                  <MovieCard movieInfo={movie} setTrailerSrc={setTrailerSrc} />
                </div>
              ))}
          </ul>
        </div>
        <Pagination />
      </section>
      {openModal && <TrailerModal src={trailerSrc} />}
    </>
  );
}

export default MovieList;
