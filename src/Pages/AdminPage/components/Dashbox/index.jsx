import React from "react";
import "./Dashbox.scss";

function Dashbox(props) {
  return (
    <div className="dashbox">
      <div className="dashbox__header">
        <div className="dashbox__name">Top Movie</div>
        <div className="dashbox__btn">View all</div>
      </div>
      <div className="dashbox__main">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Movie</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td>19:00</td>
                <td>Movie1</td>
                <td>40$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashbox;
