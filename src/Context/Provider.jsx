import React, { useState } from "react";
import Context from "./Context";

function MyProvider(props) {
  const [logined, setLogined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
