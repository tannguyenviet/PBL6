import React, { useEffect, useState, useContext, useCallback } from "react";
import { toast } from "react-toastify";

import { Table } from "reactstrap";
import Context from "../../../../Context/Context";
import ShowtimeAdd from "./ShowtimeAdd";
import ShowtimeDelete from "./ShowtimeDelete";
import ShowtimeUpdate from "./ShowtimeUpdate";
import API from "../../../../API";

function Showtime() {
  const [toggle, setToggle] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [updated, setUpdated] = useState(false); //Trigger rerender when modal finish

  const [selectedId, setSelectedId] = useState(); //For delete
  const [selectedShowtime, setSelectedShowtime] = useState({}); // For update
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [listShowtime, setListShowtime] = useState([]);

  const [listMovie, setListMovie] = useState([]);
  const [listPriceType, setListPriceType] = useState([]);
  const [listRoomFilm, setListRoomFilm] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const { today } = useContext(Context);
  console.log("render");

  //Get Movies
  useEffect(() => {
    const getNowPlayingMovie = async () => {
      try {
        const url = "/film/now-playing";
        const res = await API.get(url);
        if (res.status === 200) {
          const listNowPlaying = res.data.map((movie) => {
            return { value: movie.id, label: movie.name };
          });
          setListMovie(listNowPlaying);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    getNowPlayingMovie();
  }, []);

  //Get Price Type
  useEffect(() => {
    const getPriceTypes = async () => {
      try {
        const url = "/pricetype/list";
        const res = await API.get(url);
        if (res.status === 200) {
          const listPrice = res.data.map((type) => {
            return {
              value: type.id,
              label: `${type.description} (${type.price})`,
            };
          });
          setListPriceType(listPrice);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    getPriceTypes();
  }, []);

  //Get Room Film
  useEffect(() => {
    const getRoomFilm = async () => {
      try {
        const url = `/roomfilm/list?idTheater=${theaterInfo.id}`;
        const res = await API.get(url);
        if (res.status === 200) {
          const listRoom = res.data.map((room) => {
            return {
              value: room.id,
              label: `${room.name} (${room.row} x ${room.column})`,
            };
          });
          setListRoomFilm(listRoom);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    theaterInfo && getRoomFilm();
  }, [theaterInfo]);

  //Get theater info
  useEffect(() => {
    const getTheaterByManagerId = async () => {
      try {
        const url = `theater/manager/${userInfo.id}`;
        const res = await API.get(url);
        if (res.status === 200) {
          setTheaterInfo(res.data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    getTheaterByManagerId();
  }, [userInfo.id]);

  //Get all showtime
  useEffect(() => {
    const getAllShowTime = async (id) => {
      try {
        const url = `/showtime/search?idTheater=${id}`;
        const res = await API.get(url);
        if (res.status === 200) {
          setListShowtime(res.data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    theaterInfo && getAllShowTime(theaterInfo.id);
  }, [updated, theaterInfo]);

  //Functions
  const handleOpenModal = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const handleOpenModalDelete = useCallback(
    (id) => {
      setToggleDelete(!toggleDelete);
      setSelectedId(id);
    },
    [toggleDelete]
  );

  const handleOpenModalUpdate = useCallback(
    (showtime) => {
      setToggleUpdate(!toggleUpdate);
      setSelectedShowtime(showtime);
    },
    [toggleUpdate]
  );

  const handleUpdated = () => {
    setUpdated(!updated);
  };

  const handleDateChange = () => {};

  // const getRoomNameById = (id) => {
  //   const roomName = listRoomFilm.find((rf) => rf.value === id);
  //   return roomName.label.slice(0, -7);
  // };

  //Render
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
              <th>Room Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listShowtime &&
              listShowtime.map((item) => {
                const {
                  id,
                  film_id,
                  time_start,
                  time_end,
                  price_type_id,
                  room_film_id,
                } = item;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{film_id}</td>
                    <td>{time_start.slice(0, -8)}</td>
                    <td>{time_end.slice(0, -8)}</td>
                    <td>{price_type_id}</td>
                    <td>{room_film_id}</td>
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
            listMovie={listMovie}
            listPriceType={listPriceType}
            listRoomFilm={listRoomFilm}
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
            showtimeInfo={selectedShowtime}
            listMovie={listMovie}
            listPriceType={listPriceType}
            listRoomFilm={listRoomFilm}
            setUpdated={handleUpdated}
          />
        )}
      </section>
    </>
  );
}

export default Showtime;
