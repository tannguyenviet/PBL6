import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";
import SelectField from "../../../../../components/custom-filelds/SelectField";
import InputField from "../../../../../components/custom-filelds/InputFIeld";
import API from "../../../../../API";
import PropTypes from "prop-types";

ShowtimeUpdate.propTypes = {};

function ShowtimeUpdate(props) {
  const { toggle, onOpen, showtimeInfo, setUpdated } = props;

  //States
  const [listMovie, setListMovie] = useState([]);
  const [listPriceType, setListPriceType] = useState([]);
  const [listRoomFilm, setListRoomFilm] = useState([]);

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
        console.log(error);
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
        console.log(error);
      }
    };

    getPriceTypes();
  }, []);

  //Get Room Film (available Manager Theater 1)
  useEffect(() => {
    const getRoomFilm = async () => {
      try {
        const idTheater = 1;
        const url = `/roomfilm/list?idTheater=${idTheater}&status=available`;
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
        console.log(error);
      }
    };

    getRoomFilm();
  }, []);

  console.log("info", showtimeInfo);
  const { id, film_id, price_type_id, room_film_id, time_start, time_end } =
    showtimeInfo;
  //Function
  const timeToNumber = (time) => {
    return parseInt(time.substr(11, 5).replace(":", ""));
  };

  const parseISOLocalTime = (time) => {
    var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = new Date(new Date(time) - tzoffset).toISOString();
    return localISOTime;
  };

  const handleFormSubmit = async (values) => {
    console.log("submit", values);
    let flag = true;
    const { film_id, price_type, room_film, time_end, time_start } = values;
    if (time_end.slice(0, 11) !== time_start.slice(0, 11)) {
      alert("Invalid showtime");
      flag = false;
      return;
    }
    if (timeToNumber(time_start) >= timeToNumber(time_end)) {
      alert("Time end must be later");
      flag = false;
      return;
    }
    const updateShowtime = {
      film_id,
      price_type_id: price_type,
      room_film_id: room_film,
      time_start: parseISOLocalTime(time_start),
      time_end: parseISOLocalTime(time_end),
    };
    try {
      const url = `/showtime/${id}`;
      const res = await API.put(url, updateShowtime);
      console.log(res);
      if (res.status === 200) {
        setUpdated();
        onOpen();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    onOpen();
  };

  const initialValues = {
    film_id,
    price_type: price_type_id,
    room_film: room_film_id,
    time_start: time_start.slice(0, -5),
    time_end: time_end.slice(0, -5),
  };

  const showtimeSchema = Yup.object().shape({
    film_id: Yup.number().required("This field is required"),
    price_type: Yup.string().required("This field is required"),
    room_film: Yup.string().required("This field is required"),
    time_start: Yup.string().required("This field is required"),
    time_end: Yup.string().required("This field is required"),
  });

  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__showtime">
        <ModalHeader>Update Showtime</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={showtimeSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {(formikProps) => {
              const { values, errors, touched } = formikProps;
              console.log({ values, errors, touched });
              return (
                <Form>
                  <div className="form-side row">
                    <Field
                      label="Time Start"
                      component={InputField}
                      type="datetime-local"
                      name="time_start"
                    />
                    <Field
                      label="Time End"
                      component={InputField}
                      type="datetime-local"
                      name="time_end"
                    />
                  </div>

                  <div className="form-side row">
                    <Field
                      name="film_id"
                      component={SelectField}
                      label="Movie"
                      placeholder="Select movie"
                      value={film_id}
                      options={listMovie}
                    />
                    <Field
                      name="price_type"
                      component={SelectField}
                      label="Price type"
                      placeholder="Select price type"
                      value={price_type_id}
                      options={listPriceType}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="room_film"
                      component={SelectField}
                      label="Room film"
                      placeholder="Select room film"
                      value={room_film_id}
                      options={listRoomFilm}
                    />
                  </div>
                  <div className="form-options">
                    <FormGroup>
                      <Button type="submit">Update</Button>
                    </FormGroup>
                    <FormGroup>
                      <Button onClick={handleCloseModal}>Cancel</Button>
                    </FormGroup>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default React.memo(ShowtimeUpdate);
