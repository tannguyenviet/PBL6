import React from "react";
import * as Yup from "yup";
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from "reactstrap";
import { Formik, Form, Field } from "formik";
import InputField from "../../../../../components/custom-filelds/InputFIeld";
import GenderField from "../../../../../components/custom-filelds/GenderField";
import SelectField from "../../../../../components/custom-filelds/SelectField";
import API from "../../../../../API";
import { toast } from "react-toastify";
import useLoading from "../../../../../hooks/useLoading";
import PropTypes from "prop-types";

function UserAdd(props) {
  const { onOpen, toggle, setUpdated, listRole } = props;
  const [showLoading, hideLoading] = useLoading();
  // showLoading();

  const initialValues = {
    username: "",
    password: "",
    name: "",
    phone: "",
    email: "",
    birthday: "",
    address: "",
    gender: "male",
    role_id: "",
  };

  const userSchema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
    name: Yup.string().required("This field is required"),
    phone: Yup.number("Phone must be numbers").required(
      "This field is required"
    ),
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
    console.log("SUBMIT VALUES", values);
    showLoading();
    const url = "/account/register";
    const newUser = {
      ...values,
      gender: values.gender === "male" ? true : false,
    };
    const res = await API.post(url, newUser);
    if (res) {
      hideLoading();
      toast.success("Create successfully");
      setUpdated();
      onOpen();
    }
  };

  const handleCloseModal = () => {
    onOpen();
  };

  //Render
  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__container">
        <ModalHeader>New User</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {(formikProps) => {
              // const { values, errors } = formikProps;
              // console.log({ values, errors });

              return (
                <Form>
                  <div className="form-side row">
                    <Field
                      name="username"
                      component={InputField}
                      label="Username"
                      placeholder="Username"
                    />
                    <Field
                      name="email"
                      component={InputField}
                      label="Email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="name"
                      component={InputField}
                      label="Name"
                      placeholder="Name"
                    />
                    <Field
                      name="password"
                      component={InputField}
                      label="Password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="phone"
                      component={InputField}
                      label="Phone"
                      placeholder="Phone"
                      type="number"
                    />
                    <Field
                      name="address"
                      component={InputField}
                      label="Address"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="birthday"
                      component={InputField}
                      label="Birthday"
                      placeholder="Birthday"
                      type="date"
                    />
                    <Field
                      name="gender"
                      component={GenderField}
                      label="Gender"
                      placeholder="Gender"
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="role_id"
                      component={SelectField}
                      label="Role"
                      placeholder="Select Role"
                      options={listRole}
                    />
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

UserAdd.propTypes = {
  toggle: PropTypes.bool,
  onOpen: PropTypes.func,
  setUpdated: PropTypes.func,
};

UserAdd.defaultProps = {
  toggle: null,
  onOpen: null,
  setUpdated: null,
};

export default UserAdd;
