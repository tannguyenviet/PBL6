import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

function InputField(props) {
  const { field, form, type, label, placeholder, disabled, row } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup className={`mb-5 ${row ? "col-12" : "col-6"}`}>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={disabled}
        invalid={showError}
        rows={row}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  row: PropTypes.number,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
  row: null,
};

export default InputField;
