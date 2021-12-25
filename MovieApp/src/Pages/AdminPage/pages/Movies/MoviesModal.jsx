import React from "react";

import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Form, Field } from "formik";
import InputField from "../../../../components/custom-filelds/InputFIeld";
import PreviewField from "../../../../components/custom-filelds/PreviewField";
import PropTypes from "prop-types";

function MoviesModal(props) {
  const { onOpen, toggle, movieInfo } = props;

  const initialValues = {
    name: movieInfo.name,
    country: movieInfo.country,
    image: movieInfo.image,
    time_release: movieInfo.time_release.slice(0, 10),
    description: movieInfo.description,
    director: movieInfo.director,
    rating: movieInfo.rating,
    hashtag: movieInfo.hashtag,
  };

  //Render
  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__container">
        <ModalHeader>{movieInfo.name}</ModalHeader>
        <ModalBody>
          <Formik initialValues={initialValues}>
            {(formikProps) => {
              return (
                <Form>
                  <div className="form-side row">
                    <Field
                      name="name"
                      component={InputField}
                      label="Name"
                      disabled={true}
                    />
                    <Field
                      name="rating"
                      component={InputField}
                      label="Rating"
                      disabled={true}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="time_release"
                      component={InputField}
                      label="Release"
                      disabled={true}
                    />
                    <Field
                      name="country"
                      component={InputField}
                      label="Country"
                      disabled={true}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="hashtag"
                      component={InputField}
                      label="Genre"
                      disabled={true}
                    />
                    <Field
                      name="director"
                      component={InputField}
                      label="Director"
                      disabled={true}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="description"
                      component={InputField}
                      label="Description"
                      type="textarea"
                      disabled={true}
                      row={5}
                    />
                  </div>
                  <div className="form-side row">
                    <Field
                      name="image"
                      component={PreviewField}
                      label="Preview"
                      disabled={true}
                    />
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

MoviesModal.propTypes = {
  onOpen: PropTypes.func,
  toggle: PropTypes.bool,
  movieInfo: PropTypes.object,
};

MoviesModal.defaultProps = {
  onOpen: null,
  toggle: null,
  movieInfo: null,
};

export default MoviesModal;
