import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";
import SelectField from "../../../../../components/custom-filelds/SelectField";
import InputField from "../../../../../components/custom-filelds/InputFIeld";
import PreviewField from "../../../../../components/custom-filelds/PreviewField";
import UnavailableShowtime from "../UnavailableShowtime";
import API from "../../../../../API";

const timeToNumber = (time) => {
  return parseInt(time.substr(11, 5).replace(":", ""));
};

const parseISOLocalTime = (time) => {
  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOTime = new Date(new Date(time) - tzoffset).toISOString();
  return localISOTime;
};

function ShowtimeUpdate(props) {
  const {
    toggle,
    onOpen,
    showtimeInfo,
    setUpdated,
    listMovie,
    listPriceType,
    listRoomFilm,
    listCity,
    listTheater,
    theaterInfo,
  } = props;
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  const [theaterAdminInfo, setTheaterAdminInfo] = useState();
  const [cityAdminInfo, setCityAdminInfo] = useState();

  //Get Theater when in admin page
  useEffect(() => {
    const getTheaterInfo = async (id) => {
      try {
        const url = `/roomfilm/${id}`;
        const res = await API.get(url);
        setTheaterAdminInfo(res.id);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getTheaterInfo(showtimeInfo.room_film_id);
  }, [userInfo.role_id, showtimeInfo.room_film_id]);

  //Get City when in admin page
  useEffect(() => {
    if (theaterAdminInfo) {
      const theater = listTheater.find((t) => (t.id = theaterAdminInfo));
      setCityAdminInfo(theater.city);
    }
  }, [userInfo.role_id, listTheater, theaterAdminInfo]);

  //Function

  const handleFormSubmit = async (values) => {
    let flag = true;

    const { film_id, price_type, room_film, time_end, time_start } = values;
    if (time_end.slice(0, 11) !== time_start.slice(0, 11)) {
      toast.error("Invalid showtime");
      flag = false;
      return;
    }

    if (timeToNumber(time_start) >= timeToNumber(time_end)) {
      toast.error("Time end must be later");
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

    if (userInfo.role_id === 1) {
      //If city or theater not change => getCity, theaterAdminInfo
      //If city, theater change => get value of formik

      updateShowtime.city = values.city || cityAdminInfo;
      updateShowtime.theater = values.theater || theaterAdminInfo;
    }

    if (flag) {
      try {
        const url = `/showtime/${id}`;
        console.log(updateShowtime);
        const res = await API.put(url, updateShowtime);
        console.log(res);
        setUpdated();
        onOpen();
        toast.success("Update successfully");
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const handleCloseModal = () => {
    onOpen();
  };

  const { id, film_id, price_type_id, room_film_id, time_start, time_end } =
    showtimeInfo;

  const initialValues = {
    film_id,
    price_type: price_type_id,
    room_film: room_film_id,
    time_start: time_start.slice(0, -5),
    time_end: time_end.slice(0, -5),
    city: theaterInfo ? theaterInfo.city : "",
    theater: theaterInfo ? theaterInfo.name : "",
  };

  if (userInfo.id === 2) {
    initialValues.city = theaterInfo.city;
    initialValues.theater = theaterInfo.name;
  }

  const showtimeSchema = Yup.object().shape({
    film_id: Yup.number().required("This field is required"),
    price_type: Yup.string().required("This field is required"),
    room_film: Yup.string().required("This field is required"),
    time_start: Yup.string().required("This field is required"),
    time_end: Yup.string().required("This field is required"),
  });

  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__container">
        <ModalHeader>Update Showtime</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={showtimeSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {(formikProps) => {
              const { values, dirty } = formikProps;
              console.log("Formik Update values:", values);
              return (
                <Form>
                  {userInfo.role_id === 1 ? (
                    <div className="form-side row">
                      <Field
                        name="city"
                        component={SelectField}
                        label="City"
                        placeholder="Select city"
                        options={listCity}
                        value={cityAdminInfo}
                        disabled={true}
                      />
                      <Field
                        name="theater"
                        component={SelectField}
                        label="Theater"
                        placeholder="Select theater"
                        city={values.city || cityAdminInfo}
                        value={theaterAdminInfo}
                        options={listTheater}
                      />
                    </div>
                  ) : (
                    <div className="form-side row">
                      <Field
                        name="city"
                        component={InputField}
                        label="City"
                        value={values.city}
                        disabled={true}
                      />
                      <Field
                        name="theater"
                        component={InputField}
                        label="Theater"
                        value={values.theater}
                        disabled={true}
                      />
                    </div>
                  )}
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
                      name="room_film"
                      component={SelectField}
                      label="Room film"
                      placeholder="Select room film"
                      theaterId={values.theater || theaterAdminInfo}
                      value={room_film_id}
                      options={listRoomFilm}
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
                      name="film_id"
                      component={SelectField}
                      label="Movie"
                      placeholder="Select movie"
                      value={film_id}
                      options={listMovie}
                    />
                    <Field
                      name="preview"
                      label="Preview"
                      component={PreviewField}
                      filmId={values.film_id}
                      listFilm={listMovie}
                    />
                  </div>
                  <div className="form-side row">
                    {values.room_film &&
                      (values.time_start || values.time_end) && (
                        <UnavailableShowtime
                          roomId={values.room_film}
                          datetime={values.time_start || values.time_end}
                        />
                      )}
                  </div>
                  <div className="form-options">
                    <FormGroup>
                      <Button type="submit" disabled={!dirty}>
                        Update
                      </Button>
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
