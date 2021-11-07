import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

Logo.propTypes = {};

function Logo(props) {
  const { size } = props;
  return (
    <div className={`logo logo--${size}`}>
      <Link to="/">
        {/* <img
          src="http://pixner.net/boleto/demo/assets/images/logo/logo.png"
          alt=""
        /> */}
        {/* <img src="/logo.jpg" alt="" /> */}
        <h3>PBL6</h3>
      </Link>
    </div>
  );
}

export default Logo;
