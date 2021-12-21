import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { toast } from "react-toastify";
import API from "../../../../../API";
import PropTypes from "prop-types";

function UserDelete(props) {
  const { onOpen, toggle, setUpdated, userId } = props;

  //Functions
  const handleDeleteUser = async (id) => {
    const url = `/account/${id}`;
    const res = await API.delete(url);
    if (res) {
      setUpdated();
      onOpen();
      toast.success("Delete successfully");
    }
  };

  const handleCloseModal = () => {
    onOpen();
  };

  //Render
  return (
    <div>
      <Modal toggle={onOpen} isOpen={toggle} className="modal__container">
        <ModalHeader>Delete</ModalHeader>
        <ModalBody>Do you want to delete user id {userId}?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeleteUser(userId)}>
            Delete
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

UserDelete.propTypes = {
  toggle: PropTypes.bool,
  onOpen: PropTypes.func,
  setUpdated: PropTypes.func,
  username: PropTypes.string,
};

UserDelete.defaultProps = {
  toggle: null,
  onOpen: null,
  setUpdated: null,
  username: null,
};

export default UserDelete;
