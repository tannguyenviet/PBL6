import React from "react";
import { Link } from "react-router-dom";

function Showtime(props) {
  return (
    <section className="dashboard__showtime">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Movie</th>
            <th>Price</th>
            <th>Date Create</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td>19:00</td>
              <td>Movie1</td>
              <td>40$</td>
              <td>24-10-2021</td>
              <td>
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-add">New Showtime</Link>
    </section>
  );
}

export default Showtime;
