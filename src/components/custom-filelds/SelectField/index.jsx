import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";
import Select from "react-select";
import { style, theme } from "../../Ticket/TicketForm/TicketFormSetup";

function SelectField(props) {
  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const {
    field,
    form,
    options,
    label,
    placeholder,
    disabled,
    city,
    theaterId,
    value: propValue,
  } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => {
    const valueSelected = value || propValue;
    return option.value === valueSelected;
  });
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  let newOptions;
  if (userInfo.role_id === 1) {
    switch (name) {
      case "theater": {
        if (city) {
          newOptions = options.filter((o) => o.city === city);
        } else newOptions = [];
        break;
      }
      case "room_film": {
        if (theaterId) {
          newOptions = options.filter((o) => o.theaterId === theaterId);
        } else newOptions = [];
        break;
      }
      default:
        newOptions = options;
    }
  }

  // console.log(`OPTIONS ${name}:`, options);

  //Override onChange
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
          options={newOptions || options}
          onChange={handleSelectedOptionChange}
          styles={style}
          theme={theme}
        />
      </div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

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

export default SelectField;
