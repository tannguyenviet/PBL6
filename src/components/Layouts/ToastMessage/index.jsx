import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./ToastMessage.scss";

ToastMessage.propTypes = {
  mess: PropTypes.object,
  setMess: PropTypes.func,
};

ToastMessage.defaultProps = {
  mess: {},
  setMess: null,
};

function ToastMessage(props) {
  const { mess, setMess } = props;
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
    const activeToast = setTimeout(() => {
      setActive(false);
    }, 3500);
    const clearToast = setTimeout(() => {
      setMess();
    }, 4000);

    return () => {
      clearTimeout(activeToast);
      clearTimeout(clearToast);
    };
  }, [setMess]);
  return (
    <div className="toast__group">
      <div
        className={`toast__mess ${active ? "active" : ""} toast__mess--${
          mess.type
        }`}
      >
        <div className="toast__mess-icon">
          <i className="fas fa-check"></i>
        </div>
        <div className="toast__mess-content">
          <h4 className="toast__mess-title">Create account successfully</h4>
          <p className="toast__mess-desc">Now you can sign in to PBL6</p>
        </div>
      </div>
    </div>
  );
}

export default ToastMessage;
