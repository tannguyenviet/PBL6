import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

const handleTitleAnimation = (titleRef) => {
  // const title = titleRef.current.textContent;
  titleRef.current.classList.add("hidden");
  setTimeout(() => {
    titleRef.current && (titleRef.current.textContent = "movie");
    // (titleRef.current.textContent = title === "event" ? "movie" : "event");
    titleRef.current && titleRef.current.classList.remove("hidden");
  }, 1000);
};

const ticketBanner = (
  <h1 className="banner__title">
    <p>
      Get <span>Movie</span> Tickets
    </p>
  </h1>
);

const movieBanner = (
  <h1 className="banner__title">
    <p>
      Find <span>Movies</span> Here
    </p>
  </h1>
);

const seatBanner = (
  <h1 className="banner__title">
    <p>
      Find <span>Seats</span> Here
    </p>
  </h1>
);

const payBanner = (
  <h1 className="banner__title">
    <p>
      Tickets <span>Payment</span>
    </p>
  </h1>
);

function Banner(props) {
  const { subtitle, animate, page } = props;
  const titleRef = useRef(null);

  //Title Animation
  useEffect(() => {
    let titleInterval;
    animate &&
      (titleInterval = setInterval(() => {
        handleTitleAnimation(titleRef);
      }, 2300));

    return () => {
      clearInterval(titleInterval);
    };
  }, [animate]);

  const renderBannerTitle = (page) => {
    switch (page) {
      case "ticket":
        return ticketBanner;
      case "movie":
        return movieBanner;
      case "seat":
        return seatBanner;
      case "payment":
        return payBanner;
      default:
        return (
          <h1 className="banner__title">
            <span>Book your</span>
            <p>
              <span> tickets for</span> <span ref={titleRef}>movie</span>
            </p>
          </h1>
        );
    }
  };

  return (
    <section className={`banner-section banner-section--${page}`}>
      <div className="banner__background"></div>
      <div className="container banner__container">
        {renderBannerTitle(page)}
        <h3 className="banner__subtitle">
          {subtitle ||
            "Safe, secure, reliable ticketing.Your ticket to live entertainment!"}
        </h3>
      </div>
    </section>
  );
}

Banner.propTypes = {
  subtitle: PropTypes.string,
  animate: PropTypes.bool,
  page: PropTypes.string,
};

Banner.defaultProps = {
  subtitle: "",
  animate: false,
  page: "",
};

export default Banner;
