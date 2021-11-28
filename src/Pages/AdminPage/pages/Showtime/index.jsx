import React, { useEffect, useState, useContext } from "react";
import { Table } from "reactstrap";
import Context from "../../../../Context/Context";
import ShowtimeAdd from "./ShowtimeAdd";
import ShowtimeDelete from "./ShowtimeDelete";
import ShowtimeUpdate from "./ShowtimeUpdate";
import API from "../../../../API";
import { useCallback } from "react";

function Showtime(props) {
  const [toggle, setToggle] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [updated, setUpdated] = useState(false); //Trigger rerender when modal finish
  const [selectedId, setSelectedId] = useState(); //For delete
  const [selectedShowtime, setSelectedShowtime] = useState({}); // For update

  // const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const { today } = useContext(Context);
  const [listShowtime, setListShowtime] = useState([]);

  //Mangager in theater 1
  useEffect(() => {
    const getAllShowTime = async () => {
      try {
        const idTheater = 1;
        const url = `/showtime/search?idTheater=${idTheater}`;
        const res = await API.get(url);
        if (res.status === 200) {
          setListShowtime(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllShowTime();
  }, [updated]);

  //Function
  const handleOpenModal = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const handleOpenModalDelete = (id) => {
    setToggleDelete(!toggleDelete);
    setSelectedId(id);
  };

  const handleOpenModalUpdate = (showtime) => {
    setToggleUpdate(!toggleUpdate);
    setSelectedShowtime(showtime);
  };

  const handleUpdated = useCallback(() => {
    setUpdated(!updated);
  }, [updated]);

  const handleDateChange = () => {};

  return (
    <>
      <div className="manager__filter col-3">
        <input
          type="date"
          name="date"
          value={today}
          onChange={handleDateChange}
        />
      </div>
      <section className="dashboard__showtime">
        <Table bordered>
          <thead>
            <tr>
              <th scope="row">#</th>
              <th>Movie</th>
              <th>Time start</th>
              <th>Time end</th>
              <th>Price Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listShowtime &&
              listShowtime.map((item) => {
                const { id, film_id, time_start, time_end, price_type_id } =
                  item;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{film_id}</td>
                    <td>{time_start.slice(0, -8)}</td>
                    <td>{time_end.slice(0, -8)}</td>
                    <td>{price_type_id}</td>
                    <td>
                      <i
                        className="far fa-edit"
                        onClick={() => handleOpenModalUpdate(item)}
                      ></i>
                      <i
                        className="far fa-trash-alt"
                        onClick={() => handleOpenModalDelete(id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <button className="btn btn-add" onClick={() => handleOpenModal()}>
          New Showtime
        </button>
        {toggle && (
          <ShowtimeAdd
            toggle={toggle}
            onOpen={handleOpenModal}
            setUpdated={handleUpdated}
          />
        )}
        {toggleDelete && (
          <ShowtimeDelete
            toggle={toggleDelete}
            onOpen={handleOpenModalDelete}
            setUpdated={handleUpdated}
            showtimeId={selectedId}
          />
        )}
        {toggleUpdate && (
          <ShowtimeUpdate
            toggle={toggleUpdate}
            onOpen={handleOpenModalUpdate}
            setUpdated={handleUpdated}
            showtimeInfo={selectedShowtime}
          />
        )}
      </section>
    </>
  );
}

export default Showtime;
