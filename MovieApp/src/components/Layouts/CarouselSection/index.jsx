import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "./CarouselSection.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselSection(props) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    cssEase: "ease",
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <section className="movie__section">
      <div className="container movie__container">
        <div className="movie__top">
          <h2 className="movie__top-header">Movies</h2>
          <Link className="movie__top-btn" to="/movie/list">
            <span>View All</span>
          </Link>
        </div>
        <div className="movie__body">
          <Slider {...settings} className="movie__list">
            {props.children}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;
