import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import API from "../../../../../API";
import PropTypes from "prop-types";

function ShowtimeDelete(props) {
  const { toggle, onOpen, showtimeId, setUpdated } = props;
  const handleDeleteShowtime = async (id) => {
    try {
      const url = `/showtime/${id}`;
      console.log(url);
      const res = await API.delete(url);
      if (res.status === 200) {
        setUpdated();
        onOpen();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseModal = () => {
    onOpen();
  };

  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__showtime">
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>Do you want to delete showtime id {showtimeId}?</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => handleDeleteShowtime(showtimeId)}
          >
            Delete
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ShowtimeDelete.propTypes = {
  toggle: PropTypes.bool,
  onOpen: PropTypes.bool,
  showtimeId: PropTypes.string,
  setUpdated: PropTypes.func,
};

ShowtimeDelete.defaultProps = {
  toggle: null,
  onOpen: null,
  showtimeId: null,
  setUpdated: null,
};

export default ShowtimeDelete;
