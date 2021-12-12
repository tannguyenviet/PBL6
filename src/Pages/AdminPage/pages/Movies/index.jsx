import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import { Table } from "reactstrap";

import Pagination from "../../../../components/Layouts/Pagination";

import API from "../../../../API";

function Movies() {
  const [listMovie, setListMovie] = useState();
  const [paginationInfo, setPaginationInfo] = useState({
    page: 1,
  });

  useEffect(() => {
    const getMovieList = async () => {
      const url = `/film/list?page=${paginationInfo.page}`;
      const res = await API.get(url);
      if (res) {
        setListMovie(res.results);
        setPaginationInfo({
          page: res.page,
          totalPage: res.total_pages,
          totalMovies: res.total_results,
        });
      }
    };

    getMovieList();
  }, [paginationInfo.page]);

  return (
    <>
      <section className="dashboard__showtime">
        <Table bordered>
          <thead>
            <tr>
              <th scope="row">#</th>
              <th>Name</th>
              <th>Release at</th>
              <th>Country</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listMovie &&
              listMovie.map((movie) => {
                const { id, name, country, time_release, rating } = movie;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>{time_release.slice(0, 10)}</td>
                    <td>{country}</td>
                    <td>{rating}</td>
                    <td>
                      <i className="far fa-eye"></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        {paginationInfo && (
          <Pagination
            type="film"
            paginationInfo={paginationInfo}
            setPaginationInfo={setPaginationInfo}
          />
        )}
      </section>
    </>
  );
}

Movies.propTypes = {};

export default Movies;
