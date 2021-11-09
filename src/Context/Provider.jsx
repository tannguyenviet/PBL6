import React, { useState } from "react";
import Context from "./Context";

function MyProvider(props) {
  const [logined, setLogined] = useState(false); //Change login btn -> username
  const [loading, setLoading] = useState(false); // Preloader
  const [openModal, setOpenModal] = useState(false); //Trailer modal
  // const [ticketInfo, setTicketInfo] = useState({});

  return (
    <Context.Provider
      value={{
        logined: logined,
        loading: loading,
        openModal: openModal,
        setLogined: setLogined,
        setLoading: setLoading,
        setOpenModal: setOpenModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default MyProvider;
