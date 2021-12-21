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

  const [listCity, setListCity] = useState();
  const [listTheater, setListTheater] = useState();
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [listShowtime, setListShowtime] = useState();
  const [listMovie, setListMovie] = useState([]);
  const [listPriceType, setListPriceType] = useState([]);
  const [listRoomFilm, setListRoomFilm] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const { today } = useContext(Context);

  //Get Cities
  useEffect(() => {
    const getListCity = async () => {
      const url = "/theater/city/list";
      const res = await API.get(url);
      const listCity = res.map((c) => ({
        value: c.city,
        label: c.city,
      }));
      setListCity(listCity);
    };

    getListCity();
  }, []);

  //Get All Theaters
  useEffect(() => {
    const getAllTheaters = async () => {
      const url = "/theater/list";
      const res = await API.get(url);
      const allTheaters = res.map((t) => ({
        value: t.id,
        label: t.name,
        city: t.city,
      }));
      setListTheater(allTheaters);
    };
    getAllTheaters();
  }, []);

  //Get Movies
  useEffect(() => {
    const getNowPlayingMovie = async () => {
      try {
        const url = "/film/now-playing";
        const res = await API.get(url);
        const listNowPlaying = res.map((movie) => {
          return { value: movie.id, label: movie.name, image: movie.image };
        });
        setListMovie(listNowPlaying);
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
        const listPrice = res.map((type) => {
          return {
            value: type.id,
            label: `${type.description} (${type.price})`,
          };
        });
        setListPriceType(listPrice);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getPriceTypes();
  }, []);

  //Get Room Film
  useEffect(() => {
    const getRoomFilmForManager = async () => {
      try {
        const url = `/roomfilm/list?idTheater=${theaterInfo.id}`;
        const res = await API.get(url);
        const listRoom = res.map((room) => {
          return {
            value: room.id,
            label: room.name,
            theaterId: room.theater_id,
          };
        });
        setListRoomFilm(listRoom);
      } catch (error) {
        toast.error(error.message);
      }
    };
    const getRoomFilmForAdmin = async () => {
      try {
        const url = `/roomfilm/list`;
        const res = await API.get(url);
        const listRoom = res.map((room) => {
          return {
            value: room.id,
            label: room.name,
            theaterId: room.theater_id,
          };
        });
        setListRoomFilm(listRoom);
      } catch (error) {
        toast.error(error.message);
      }
    };

    theaterInfo ? getRoomFilmForManager() : getRoomFilmForAdmin();
  }, [theaterInfo]);

  //Get theater info
  useEffect(() => {
    const getTheaterByManagerId = async () => {
      try {
        const url = `theater/manager/${userInfo.id}`;
        const res = await API.get(url);
        if (res.length !== 0) {
          setTheaterInfo(res);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    userInfo.role_id === 2 && getTheaterByManagerId();
  }, [userInfo.id, userInfo.role_id]);

  //Get all showtime
  useEffect(() => {
    const getShowTimeForManager = async (id) => {
      try {
        const url = `/showtime/search?idTheater=${id}`;
        const res = await API.get(url);
        setListShowtime(res);
      } catch (error) {
        toast.error(error.message);
      }
    };
    const getShowTimeForAdmin = async () => {
      try {
        const url = `/showtime/searchForAdmin`;
        const res = await API.get(url);
        setListShowtime(res);
      } catch (error) {
        toast.error(error.message);
      }
    };
    theaterInfo ? getShowTimeForManager(theaterInfo.id) : getShowTimeForAdmin();
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

  const getPriceTypeById = (id) => {
    if (listPriceType.length > 0) {
      const price = listPriceType.find((p) => p.value === id);
      if (price) {
        return price.label;
      }
    }
  };

  const getRoomNameById = (id) => {
    if (listRoomFilm.length > 0) {
      const roomName = listRoomFilm.find((rf) => {
        return rf.value === id;
      });
      return roomName && roomName.label;
    }
  };

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
                    <td>{getPriceTypeById(price_type_id)}</td>
                    <td>{getRoomNameById(room_film_id)}</td>
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
            listCity={listCity}
            listTheater={listTheater}
            listPriceType={listPriceType}
            listRoomFilm={listRoomFilm}
            theaterInfo={theaterInfo}
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
            listCity={listCity}
            listTheater={listTheater}
            listMovie={listMovie}
            listPriceType={listPriceType}
            listRoomFilm={listRoomFilm}
            theaterInfo={theaterInfo}
            setUpdated={handleUpdated}
          />
        )}
      </section>
    </>
  );
}

export default Showtime;
