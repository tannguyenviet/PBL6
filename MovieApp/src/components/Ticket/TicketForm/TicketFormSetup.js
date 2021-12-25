export const style = {
  menu: (provided, state) => ({
    ...provided,
    fontSize: "12px",
    backgroundColor: "#103650",
  }),
  control: (provided) => ({
    ...provided,
    fontSize: "12px",
    backgroundColor: "#0a1e5e",
  }),
  dropdownIndicator: (provided) => ({
    display: "none",
    fontSize: "10px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#bfccfa",
  }),
  option: (provided) => ({
    ...provided,
    color: "#bfccfa",
    "&:hover": {
      backgroundColor: "#0a1e5e",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#bfccfa",
  }),
  input: (provided) => ({
    ...provided,
    color: "#bfccfa",
  }),
};

export const theme = (theme) => ({
  ...theme,
  colors: {
    primary25: "#0a1e5e",
  },
});
