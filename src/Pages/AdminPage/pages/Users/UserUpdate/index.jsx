import React from "react";
import * as Yup from "yup";
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";
import InputField from "../../../../../components/custom-filelds/InputFIeld";
import GenderField from "../../../../../components/custom-filelds/GenderField";
import SelectField from "../../../../../components/custom-filelds/SelectField";
// import API from "../../../../../API";
// import { toast } from "react-toastify";
import PropTypes from "prop-types";

function UserUpdate(props) {
  const { onOpen, toggle, userInfo, listRole } = props;
  console.log("USER INFO", userInfo);

  const initialValues = {
    id: userInfo.id,
    username: userInfo.username,
    password: userInfo.password,
    name: userInfo.name,
    phone: userInfo.phone,
    email: userInfo.email,
    birthday: userInfo.birthday && userInfo.birthday.slice(0, 10),
    address: userInfo.address,
    gender: getGender(userInfo.gender),
    role_id: userInfo.role_id,
  };

  const userSchema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
    name: Yup.string().required("This field is required"),
    phone: Yup.number()
      .typeError("Phone must be numbers")
      .positive()
      .required("This field is required"),
    email: Yup.string()
      .required("This field is required")
      .email("Email is invalid"),
    address: Yup.string().required("This field is required"),
    birthday: Yup.string().required("This field is required"),
    gender: Yup.string().required("This field is required"),
    role_id: Yup.number().required("This field is required"),
  });

  //Functions
  const handleFormSubmit = async (values) => {
    console.log("SUBMIT", values);
    const url = `/account/${values.id}`;
    console.log(url);
    // const updateUser = {
    //   ...values,
    //   gender: values.gender === "male" ? true : false,
    // };
    // const res = await API.put(url, updateUser);
    // if(res) {
    //   console.log(res);
    //   toast.success("Update successfully");
    //   setUpdated();
    //   onOpen();
    // }
  };

  const handleCloseModal = () => {
    onOpen();
  };

  function getGender(gender) {
    return gender ? "male" : "female";
  }

  //Render
  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__container">
        <ModalHeader>User {userInfo.username}</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {(formikProps) => {
              return (
                <Form>
                  <div className="form-side row">
                    <Field
                      name="username"
                      component={InputField}
                      label="Username"
                      placeholder="Username"
                      disabled={true}
                    />
                    <Field
                      name="email"
                      component={InputField}
                      label="Email"
                      placeholder="Email"
                      disabled={true}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="name"
                      component={InputField}
                      label="Name"
                      placeholder="Name"
                      disabled={true}
                    />
                    <Field
                      name="password"
                      component={InputField}
                      label="Password"
                      placeholder="Password"
                      type="password"
                      disabled={true}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="phone"
                      component={InputField}
                      label="Phone"
                      placeholder="Phone"
                      type="number"
                      disabled={true}
                    />
                    <Field
                      name="address"
                      component={InputField}
                      label="Address"
                      placeholder="Address"
                      disabled={true}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="birthday"
                      component={InputField}
                      label="Birthday"
                      placeholder="Birthday"
                      type="date"
                      disabled={true}
                    />
                    <Field
                      name="gender"
                      component={GenderField}
                      label="Gender"
                      placeholder="Gender"
                      disabled={true}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="role_id"
                      component={SelectField}
                      label="Role"
                      placeholder="Select Role"
                      value={formikProps.values.role_id}
                      options={listRole}
                    />
                  </div>
                  <div className="form-options">
                    {/* <FormGroup>
                      <Button type="submit">Create</Button>
                    </FormGroup> */}
                    <FormGroup>
                      <Button onClick={handleCloseModal}>Close</Button>
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

UserUpdate.propTypes = {
  toggle: PropTypes.bool,
  onOpen: PropTypes.func,
  setUpdated: PropTypes.func,
  userInfo: PropTypes.object,
};

UserUpdate.defaultProps = {
  toggle: null,
  onOpen: null,
  setUpdated: null,
  userInfo: null,
};

export default UserUpdate;
