import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../../../../API";
import "./UnavailableShowtime.scss";

function UnavailableShowtime(props) {
  const { roomId, datetime } = props;
  const date = datetime.slice(0, 10);

  const [listShowtime, setListShowtime] = useState();

  useEffect(() => {
    const getUnavailableShowtime = async () => {
      const url = `showtime/list?idRoom=${roomId}&date=${date}`;
      const res = await API.get(url);
      // console.log("URL", url);
      setListShowtime(res);
    };
    getUnavailableShowtime();
  }, [roomId, date]);

  return (
    <div className="showtime__unavailable">
      {listShowtime && listShowtime.length > 0 && (
        <>
          <h1>UNAVAILABLE SHOWTIME</h1>
          <ul className="showtime__unavailable-list">
            {listShowtime.map((st) => {
              return (
                <li key={st.id}>
                  <span>{st.time_start.substr(11, 5)}</span>
                  <span>--</span>
                  <span>{st.time_end.substr(11, 5)}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

UnavailableShowtime.propTypes = {
  roomId: PropTypes.number,
  date: PropTypes.string,
};

UnavailableShowtime.defaultProps = {
  roomId: "",
  datetime: "",
};

export default React.memo(UnavailableShowtime);
