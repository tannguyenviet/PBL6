import React from "react";

App.propTypes = {};

function App(props) {
  //Functions

  return (
    <div className="manager__section">
      <div className="container manager__container row">
        <h1 className="manager__title">Manage Showtime</h1>
        {props.children}
      </div>
    </div>
  );
}

export default App;
