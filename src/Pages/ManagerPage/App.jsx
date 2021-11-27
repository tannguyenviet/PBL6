import React, { useContext } from "react";
import Context from "../../Context/Context";

App.propTypes = {};

function App(props) {
  const { today } = useContext(Context);

  //Functions
  const handleDateChange = () => {};
  return (
    <div className="manager__section">
      <div className="container manager__container row">
        <h1 className="manager__title">Manage Showtime</h1>
        <div className="manager__filter col-3">
          <input
            type="date"
            name="date"
            value={today}
            onChange={handleDateChange}
          />
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default App;
