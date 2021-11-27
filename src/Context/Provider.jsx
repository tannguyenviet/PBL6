import React, { useState } from "react";
import Context from "./Context";

const getCurrentDate = () => {
  var date = new Date();
  return date.toISOString().substr(0, 10);
};

function MyProvider(props) {
  const [logined, setLogined] = useState(false); //Change login btn -> username
  const [loading, setLoading] = useState(false); // Preloader
  const [openModal, setOpenModal] = useState(false); //Trailer modal
  const today = getCurrentDate();

  //Ticket Info with default value is date: today
  const [ticketInfo, setTicketInfo] = useState(() => {
    const ticketLocal = JSON.parse(sessionStorage.getItem("ticket_info"));
    if (ticketLocal) {
      return ticketLocal;
    }
    return { date: getCurrentDate() };
  });

  return (
    <Context.Provider
      value={{
        today,
        logined: logined,
        loading: loading,
        openModal: openModal,
        ticketInfo: ticketInfo,
        setLogined: setLogined,
        setLoading: setLoading,
        setOpenModal: setOpenModal,
        setTicketInfo: setTicketInfo,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default MyProvider;
