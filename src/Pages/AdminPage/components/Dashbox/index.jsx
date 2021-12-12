import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import "./Dashbox.scss";

function Dashbox(props) {
  const { name, info } = props;
  const history = useHistory();

  //Functions
  const handleDashboxClicked = () => {
    history.push(`/admin/${name}`);
  };

  const renderIcon = (name) => {
    switch (name) {
      case "movies":
        return <i className="fas fa-film" />;
      case "ticket":
        return <i className="fas fa-ticket-alt" />;
      case "theater":
        return <i className="fas fa-place-of-worship" />;
      case "showtime":
        return <i className="far fa-calendar-alt" />;
      case "revenue":
        return <i className="fas fa-user-friends" />;
      default:
        return <i className="fas fa-user-friends" />;
    }
  };

  //Render
  return (
    <div className="dashbox" onClick={handleDashboxClicked}>
      <div className="dashbox__icon">{renderIcon(name)}</div>
      <div className="dashbox__main">
        <h3 className="dashbox__name">Total {name}</h3>
        {info && <span>{info.total_results}</span>}
      </div>
    </div>
  );
}

Dashbox.propTypes = {
  name: PropTypes.string,
  info: PropTypes.object,
};

Dashbox.defaultProps = {
  name: null,
  info: null,
};

export default React.memo(Dashbox);
