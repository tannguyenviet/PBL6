import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { baseURLFake, API_KEY } from "../../../API";
import "./TrailerModal.scss";
import Context from "../../../Context/Context";

function TrailerModal(props) {
  const { id } = props;
  const context = useContext(Context);
  const { setOpenModal } = context;

  //States
  const [source, setSource] = useState();

  //Call API GET TRAILER
  useEffect(() => {
    const getMovieById = async (id) => {
      const res = await fetch(`${baseURLFake}movie/${id}/videos?${API_KEY}`);
      const data = await res.json();
      const listTrailer = data.results;
      console.log("List trailer: ", listTrailer);
      const trailer = listTrailer.find((trailer) =>
        trailer.name.includes("Trailer")
      );
      setSource(trailer);
    };
    getMovieById(id);
  }, [id]);

  //Close modal when click into overlay
  const handleTrailerModal = (e) => {
    if (e.target.className === "modal__container") {
      setOpenModal(false);
    } else {
      return;
    }
  };

  return (
    <div className="modal__bg">
      <div className="modal__container" onClick={handleTrailerModal}>
        <iframe
          width="850"
          height="500"
          src={`https://www.youtube.com/embed/${source && source.key}`}
          title={source && source.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

TrailerModal.propTypes = {
  id: PropTypes.number,
};

TrailerModal.defaultProps = {
  id: null,
};

/* <video className="modal__trailer" controls>
          <source
            src={`https://www.youtube.com/watch?v=NMzJbD53ODc`}
            type="video/mp4"
          />
        </video> */

export default TrailerModal;
