import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

function GenderField(props) {
  const { field, form, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup className="mb-5 col-6">
      {label && <Label for={name}>{label}</Label>}
      <div className={`form__radio ${showError ? "is-invalid" : ""}`}>
        <div className="form__radio-item">
          <span>Male</span>
          <Input
            id="male"
            {...field}
            placeholder={placeholder}
            type="radio"
            value="male"
            disabled={disabled}
          />
        </div>

        <div className="form__radio-item">
          <span>Female</span>
          <Input
            id="female"
            {...field}
            placeholder={placeholder}
            type="radio"
            value="female"
            disabled={disabled}
          />
        </div>
      </div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

GenderField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

GenderField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
};

export default GenderField;
