import React from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./Pagination.scss";

function PaginationArea(props) {
  const { paginationInfo, setPaginationInfo } = props;
  const { page, totalPage } = paginationInfo;
  // console.log("Pagination: ", paginationInfo);

  const listPage = [];
  for (let i = 1; i <= totalPage; ++i) {
    listPage.push(i);
  }

  //Functions
  const handlePageChange = (newPage) => {
    setPaginationInfo({
      ...paginationInfo,
      page: newPage,
    });
  };

  //Renders
  return (
    <Pagination className="pagination" size="lg">
      <PaginationItem
        disabled={page * 1 <= 1}
        onClick={() => handlePageChange(1)}
      >
        <PaginationLink first />
      </PaginationItem>
      <PaginationItem
        disabled={page * 1 <= 1}
        onClick={() => handlePageChange(page * 1 - 1)}
      >
        <PaginationLink previous />
      </PaginationItem>

      {listPage.map((p) => (
        <PaginationItem
          key={p}
          onClick={() => handlePageChange(p)}
          active={p === page * 1}
        >
          <PaginationLink>{p}</PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem
        disabled={page >= totalPage}
        onClick={() => handlePageChange(page * 1 + 1)}
      >
        <PaginationLink next />
      </PaginationItem>
      <PaginationItem disabled={page * 1 >= totalPage}>
        <PaginationLink last onClick={() => handlePageChange(totalPage)} />
      </PaginationItem>
    </Pagination>
  );
}

PaginationArea.propTypes = {
  type: PropTypes.string,
  paginationInfo: PropTypes.object,
  setPaginationInfo: PropTypes.func,
};

PaginationArea.defaultProps = {
  type: null,
  paginationInfo: null,
  setPaginationInfo: null,
};

export default React.memo(PaginationArea);
