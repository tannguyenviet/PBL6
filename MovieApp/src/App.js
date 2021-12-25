import React, { useContext, useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { ToastContainer } from "react-toastify";

import ButtonToTop from "./components/Layouts/ButtonToTop/ButtonToTop";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Context from "./Context/Context";
import "./sass/app.scss";

function App(props) {
  //Context
  const context = useContext(Context);
  const { openModal } = context;

  //States
  const [active, setActive] = useState("");

  //Active header vs toTop when scroll
  useEffect(() => {
    const handleToTopScroll = () => {
      setActive(window.scrollY > 0 ? "active" : "");
    };
    window.addEventListener("scroll", handleToTopScroll);

    return () => {
      window.removeEventListener("scroll", handleToTopScroll);
    };
  }, []);

  //Block scroll when open Modal
  useEffect(() => {
    openModal
      ? document.body.classList.add("hidden")
      : document.body.classList.remove("hidden");
  }, [openModal]);

  return (
    <>
      {context.loading && (
        <div className="loading-overlay">
          <BounceLoader loading={context.loading} size={60} color="#bfccfa" />
        </div>
      )}
      <ButtonToTop active={active} />
      <Header active={active} />
      <main>{props.children}</main>
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
      <Footer />
    </>
  );
}

export default App;
