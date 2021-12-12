import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

import API from "../../../../API";
import UserAdd from "./UserAdd";
Users.propTypes = {};

function Users() {
  const [listAccount, setListAccount] = useState();
  const [toggleAdd, setToggleAdd] = useState(false);
  const [updated, setUpdated] = useState(false); //Trigger rerender when modal finish

  useEffect(() => {
    const getListAccount = async () => {
      const url = `/account/list?idRole=`;
      const res = await API.get(url);
      if (res) {
        setListAccount(res);
        console.log("RES", res);
      }
    };
    getListAccount();
  }, []);

  //Functions
  const handleOpenModal = useCallback(() => {
    setToggleAdd(!toggleAdd);
  }, [toggleAdd]);

  const handleUpdated = useCallback(() => {
    setUpdated(!updated);
  }, [updated]);

  //Render
  return (
    <>
      <section className="dashboard__users">
        <Table bordered>
          <thead>
            <tr>
              <th scope="row">#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listAccount &&
              listAccount.map((movie) => {
                const {
                  id,
                  username,
                  email,
                  phone,
                  role_id,
                  gender,
                  isVerified,
                } = movie;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{role_id === 3 ? "Member" : "Manager"}</td>
                    <td>{gender ? "Male" : "Female"}</td>
                    <td>{phone}</td>
                    <td>{isVerified ? "Actived" : "Inactive"}</td>
                    <td>
                      <i className="far fa-edit"></i>
                      <i className="far fa-trash-alt"></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <button className="btn btn-add" onClick={() => handleOpenModal()}>
          New user
        </button>
        {toggleAdd && (
          <UserAdd
            toggle={toggleAdd}
            onOpen={handleOpenModal}
            setUpdated={handleUpdated}
          />
        )}
      </section>
    </>
  );
}

export default Users;
