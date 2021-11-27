import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";
import SelectField from "../../../../../components/custom-filelds/SelectField";
import InputField from "../../../../../components/custom-filelds/InputFIeld";
import API from "../../../../../API";
import "./ShowtimeAdd.scss";

function ShowtimeAdd(props) {
  const { toggle, onOpen } = props;
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  //States
  const [listMovie, setListMovie] = useState([]);
  const [listPriceType, setListPriceType] = useState([]);
  const [listRoomFilm, setListRoomFilm] = useState([]);
  const [listCity, setListCity] = useState([]);
  const [listTheater, setListTheater] = useState([]);

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

  //Get Cities
  useEffect(() => {
    const getCities = async () => {
      try {
        if (userInfo.role_id === 1) {
          const url = `/theater/city/list`;
          const res = await API.get(url);
          if (res.status === 200) {
            const cities = res.data.map((city) => {
              return {
                value: city.city,
                label: city.city,
              };
            });
            setListCity(cities);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCities();
  }, [userInfo.role_id]);

  //Get theater
  // useEffect(() => {
  //   const getTheaters = async () => {
  //     try {
  //       if (showtime.city) {
  //         const url = `/theater/search?cityName=${showtime.city}`;
  //         const res = await API.get(url);
  //         if (res.status === 200) {
  //           const theaters = res.data.map((theater) => {
  //             return {
  //               value: theater.id,
  //               label: theater.name,
  //             };
  //           });
  //           setListTheater(theaters);
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getTheaters();
  // }, [showtime.city, userInfo.role_id]);

  //Functions
  const handleCloseModal = () => {
    onOpen();
  };

  const timeToNumber = (time) => {
    return parseInt(time.substr(11, 5).replace(":", ""));
  };

  const parseISOLocalTime = (time) => {
    var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = new Date(new Date(time) - tzoffset).toISOString();
    return localISOTime;
  };

  const handleFormSubmit = async (values) => {
    console.log("submit: ", values);
    let flag = true;
    const { film_id, price_type, room_film, time_end, time_start } = values;

    if (time_end.slice(0, 11) !== time_start.slice(0, 11))
      alert("Invalid showtime");
    if (timeToNumber(time_start) > timeToNumber(time_end))
      alert("Time end must be later");

    if (flag) {
      const newShowtime = {
        time_start: parseISOLocalTime(time_start),
        time_end: parseISOLocalTime(time_end),
        film_id,
        price_type_id: price_type,
        room_film_id: room_film,
      };
      const url = "/showtime/create";
      const res = await API.post(url, newShowtime);
      console.log(res);
    }
  };

  const initialValues = {
    film_id: "",
    price_type: "",
    room_film: "",
    time_start: "",
    time_end: "",

    // theater: "",
    // city: "",
  };

  const showtimeSchema = Yup.object().shape({
    film_id: Yup.string().required("This field is required"),
    price_type: Yup.string().required("This field is required"),
    room_film: Yup.string().required("This field is required"),
    time_start: Yup.string().required("This field is required"),
    time_end: Yup.string().required("This field is required"),
    // theater: Yup.string().required("This field is required"),
    // city: Yup.string().required("This field is required"),
  });

  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__showtime">
        <ModalHeader>New showtime</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={showtimeSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {(formikProps) => {
              const { values, errors } = formikProps;
              console.log({ values, errors });
              return (
                <Form id="form-showtime">
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
                      options={listMovie}
                    />
                    <Field
                      name="price_type"
                      component={SelectField}
                      label="Price type"
                      placeholder="Select price type"
                      options={listPriceType}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="room_film"
                      component={SelectField}
                      label="Room film"
                      placeholder="Select room film"
                      options={listRoomFilm}
                    />
                  </div>
                  {userInfo.role_id === 1 && (
                    <div className="form-side row">
                      <Field
                        name="city"
                        component={SelectField}
                        label="City"
                        placeholder="Select city"
                        options={listCity}
                      />
                      <Field
                        name="theater"
                        component={SelectField}
                        label="Theater"
                        placeholder="Select theater"
                        options={listTheater}
                      />
                    </div>
                  )}
                  <div className="form-options">
                    <FormGroup>
                      <Button type="submit">Create</Button>
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
export default ShowtimeAdd;
