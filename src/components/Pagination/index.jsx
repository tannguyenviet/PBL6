import React from "react";
import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.scss";

PaginationSection.propTypes = {};

function PaginationSection(props) {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" color="secondary" />
    </Stack>
  );
}

export default PaginationSection;
