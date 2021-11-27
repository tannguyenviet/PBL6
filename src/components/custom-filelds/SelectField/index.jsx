import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
import Select from "react-select";
import { style, theme } from "../../Ticket/TicketForm/TicketFormSetup";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup className="mb-5 col-6">
      {label && <Label for={name}>{label}</Label>}
      <div className={`select-bar ${showError ? "is-invalid" : ""}`}>
        <Select
          id={name}
          {...field}
          value={selectedOption}
          placeholder={placeholder}
          disabled={disabled}
          options={options}
          onChange={handleSelectedOptionChange}
          styles={style}
          theme={theme}
        />
      </div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
