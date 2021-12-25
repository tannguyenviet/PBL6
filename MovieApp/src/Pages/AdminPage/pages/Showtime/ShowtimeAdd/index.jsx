import React from "react";
import * as Yup from "yup";
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

// import Context from "../../../../../Context/Context";
import SelectField from "../../../../../components/custom-filelds/SelectField";
import InputField from "../../../../../components/custom-filelds/InputFIeld";
import PreviewField from "../../../../../components/custom-filelds/PreviewField";
import API from "../../../../../API";
import UnavailableShowtime from "../UnavailableShowtime";
import "./ShowtimeAdd.scss";

const timeToNumber = (time) => {
  return parseInt(time.substr(11, 5).replace(":", ""));
};

const parseISOLocalTime = (time) => {
  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOTime = new Date(new Date(time) - tzoffset).toISOString();
  return localISOTime;
};

function ShowtimeAdd(props) {
  const {
    toggle,
    onOpen,
    setUpdated,
    listMovie,
    listPriceType,
    listRoomFilm,
    listCity,
    listTheater,
    theaterInfo,
  } = props;
  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  // const { today } = useContext(Context);
  // console.log(today);

  //Functions
  const handleCloseModal = () => {
    onOpen();
  };

  const handleFormSubmit = async (values) => {
    // console.log("submit: ", values);
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
      if (res) {
        setUpdated();
        onOpen();
        toast.success("Add successfully");
      }
    }
  };

  const initialValues = {
    film_id: "",
    price_type: "",
    room_film: "",
    time_start: "",
    time_end: "",
    theater: "",
    city: "",
  };

  if (userInfo.role_id === 2) {
    initialValues.theater = theaterInfo.name;
    initialValues.city = theaterInfo.city;
  }

  const showtimeManagerSchema = Yup.object().shape({
    film_id: Yup.string().required("This field is required"),
    price_type: Yup.string().required("This field is required"),
    room_film: Yup.string().required("This field is required"),
    time_start: Yup.string().required("This field is required"),
    time_end: Yup.string().required("This field is required"),
    theater: Yup.string(),
    city: Yup.string(),
  });

  const showtimeAdminSchema = Yup.object().shape({
    film_id: Yup.string().required("This field is required"),
    price_type: Yup.string().required("This field is required"),
    room_film: Yup.string().required("This field is required"),
    time_start: Yup.string().required("This field is required"),
    time_end: Yup.string().required("This field is required"),
    theater: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
  });

  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__container">
        <ModalHeader>New Showtime</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={
              userInfo.role_id === 1
                ? showtimeAdminSchema
                : showtimeManagerSchema
            }
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {(formikProps) => {
              const { values } = formikProps;
              // console.log({ values, errors });
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
                        disabled={true}
                      />
                      <Field
                        name="theater"
                        component={SelectField}
                        label="Theater"
                        city={values.city}
                        placeholder="Select theater"
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
                      theaterId={values.theater}
                      options={listRoomFilm}
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
                      name="film_id"
                      component={SelectField}
                      label="Movie"
                      placeholder="Select movie"
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
export default React.memo(ShowtimeAdd);
