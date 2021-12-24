import React, { useState, useEffect, useCallback } from "react";
import { Table } from "reactstrap";
import Select from "react-select";
import { style } from "../../../../components/Ticket/TicketForm/TicketFormSetup";

import API from "../../../../API";
import UserAdd from "./UserAdd";
import UserUpdate from "./UserUpdate";
import UserDelete from "./UserDelete";

const listRole = [
  { value: 1, label: "Admin" },
  { value: 2, label: "Manager" },
  { value: 3, label: "Member" },
];

function Users() {
  const [listAccount, setListAccount] = useState();
  const [listFilterByRole, setListFilterByRole] = useState();
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [updated, setUpdated] = useState(false); //Trigger rerender when modal finish
  const [selectedUser, setSelectedUser] = useState();

  //Get all account
  useEffect(() => {
    const getListAccount = async () => {
      const url = `/account/list?idRole=`;
      const res = await API.get(url);
      if (res) {
        setListAccount(res);
        setListFilterByRole(res);
      }
    };
    getListAccount();
  }, [updated]);

  //Functions
  const handleOpenModalAdd = useCallback(() => {
    setToggleAdd(!toggleAdd);
  }, [toggleAdd]);

  const handleOpenModalUpdate = useCallback(
    (user) => {
      setSelectedUser(user);
      setToggleUpdate(!toggleUpdate);
    },
    [toggleUpdate]
  );

  const handleOpenModalDelete = useCallback(
    (user) => {
      setToggleDelete(!toggleDelete);
      setSelectedUser(user);
    },
    [toggleDelete]
  );

  const handleUpdated = useCallback(() => {
    setUpdated(!updated);
  }, [updated]);

  const getRoleName = (roleId) => {
    if (roleId === 1) {
      return "Admin";
    }

    if (roleId === 2) {
      return "Manager";
    }

    return "Member";
  };

  //Filter list account when role change
  const handleRoleChange = (option) => {
    const accountsFilter = listAccount.filter(
      (acc) => acc.role_id === option.value
    );
    if (accountsFilter.length === 0) {
      setListFilterByRole(listAccount);
      return;
    }
    setListFilterByRole(accountsFilter);
  };

  //Render
  return (
    <>
      <section className="dashboard__users">
        <div className="dashboard__users-filter">
          <Select
            options={listRole}
            styles={style}
            placeholder="Select role ..."
            onChange={handleRoleChange}
          />
        </div>
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
            {listFilterByRole &&
              listFilterByRole.map((user) => {
                const {
                  id,
                  username,
                  email,
                  phone,
                  role_id,
                  gender,
                  isVerified,
                } = user;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{getRoleName(role_id)}</td>
                    <td>{gender ? "Male" : "Female"}</td>
                    <td>{phone}</td>
                    <td>{isVerified ? "Actived" : "Inactive"}</td>
                    <td>
                      <i
                        className="fas fa-eye"
                        onClick={() => handleOpenModalUpdate(user)}
                      ></i>
                      {user.role_id !== 1 && (
                        <i
                          className="far fa-trash-alt"
                          onClick={() => handleOpenModalDelete(user)}
                        ></i>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <button className="btn btn-add" onClick={() => handleOpenModalAdd()}>
          New user
        </button>
        {toggleAdd && (
          <UserAdd
            toggle={toggleAdd}
            onOpen={handleOpenModalAdd}
            setUpdated={handleUpdated}
            listRole={listRole}
          />
        )}
        {toggleUpdate && (
          <UserUpdate
            toggle={toggleUpdate}
            onOpen={handleOpenModalUpdate}
            setUpdated={handleUpdated}
            listRole={listRole}
            userInfo={selectedUser}
          />
        )}
        {toggleDelete && (
          <UserDelete
            toggle={toggleDelete}
            userId={selectedUser.id}
            onOpen={handleOpenModalDelete}
            setUpdated={handleUpdated}
          />
        )}
      </section>
    </>
  );
}

Users.propTypes = {};

export default Users;
