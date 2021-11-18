import React, { useContext, useEffect, useState } from "react";

import API from "../../API";
import Context from "../../Context/Context";
import TrailerModal from "../../components/Movie/TrailerModal";
import Banner from "../../components/Layouts/Banner";
import TicketForm from "../../components/Ticket/TicketForm";
import MovieCard from "../../components/Movie/MovieCard";
import CarouselSection from "../../components/Layouts/CarouselSection";

function HomePage(props) {
  const [movieList, setMovieList] = useState([]); //carousel
  const [trailerSrc, setTrailerSrc] = useState(); //Get movide id to pass into TrailerModel
  const context = useContext(Context);
  const { openModal } = context;

  //GET MOVIE LIST API SHOW IN CAROUSEL
  useEffect(() => {
    const getMovieList = async () => {
      try {
        const url = "/film/list";
        const res = await API.get(url);
        if (res.status === 200) {
          setMovieList(res.data);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieList();
  }, []);

  return (
    <>
      <Banner animate={true} />
      <section className="search-ticket__section">
        <div className="container search-ticket__container">
          <div className="search-ticket__box">
            <div className="search-ticket__top">
              <div className="search-ticket__header">
                <h6 className="category">Welcome to PBL6</h6>
                <h3 className="title">What are you looking for</h3>
              </div>
              <div className="search-ticket__menu">
                <div className="search-ticket__tab">
                  <span>Get Ticket</span>
                </div>
              </div>
            </div>
            <div className="search-ticket__bot">
              <TicketForm search={true} />
            </div>
          </div>
        </div>
      </section>
      <CarouselSection>
        {movieList &&
          movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              movieInfo={movie}
              setTrailerSrc={setTrailerSrc}
            />
          ))}
      </CarouselSection>
      {openModal && <TrailerModal src={trailerSrc} />}
    </>
  );
}

export default HomePage;
