import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./TrailerModal.scss";
import Context from "../../../Context/Context";

function TrailerModal(props) {
  //Get status: ON-OFF of modal
  const context = useContext(Context);
  const { setOpenModal } = context;

  //Props
  const { trailer, name } = props.src;

  //Close modal when click into overlay
  const handleTrailerModal = (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal__wrapper") {
      setOpenModal(false);
    } else {
      return;
    }
  };

  //Render
  return (
    <div className="modal__bg">
      <div className="modal__wrapper" onClick={handleTrailerModal}>
        <iframe
          width="850"
          height="500"
          src={trailer}
          frameBorder="0"
          title={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

TrailerModal.propTypes = {
  src: PropTypes.object,
};

TrailerModal.defaultProps = {
  src: null,
};

/* <video className="modal__trailer" controls>
          <source
            src={`https://www.youtube.com/watch?v=NMzJbD53ODc`}
            type="video/mp4"
          />
        </video> */

export default TrailerModal;
