import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Context from "../../Context/Context";
import API from "../../API";
import "./Login.scss";
import Logo from "../../components/Layouts/Logo";

const isEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

function LoginForm(props) {
  //Context
  const context = useContext(Context);

  //States
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //Functions
  const handleInputChange = (e) => {
    const newLoginInfo = {
      ...loginInfo,
      [e.target.name]: e.target.value,
    };
    setLoginInfo(newLoginInfo);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    let flag = true;
    const { email, password } = loginInfo;

    if (!isEmail(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is invalid",
      }));
      flag = false;
    }

    if (!email || email.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is empty",
      }));
      flag = false;
    }

    if (!password || password.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is empty",
      }));
      flag = false;
    }

    if (flag) {
      const url = "/login";
      const data = loginInfo;
      const config = {
        headers: {
          ContentType: "application/json",
        },
      };
      try {
        const res = await API.post(url, data, config);
        if (res.status === 200) {
          localStorage.setItem("user_info", JSON.stringify(res.data));
          context.setLogined(true);
          context.setLoading(true);
          setTimeout(() => {
            context.setLoading(false);
            props.history.push("/");
          }, 4000);
        }
      } catch (error) {
        setFormErrors({
          email: "Email or Password is not correct",
          password: "Email or Password is not correct",
        });
        console.log("ERROR:", error);
      }
    }
  };

  //Render
  const { email, password } = loginInfo;
  const { email: emailError, password: passError } = formErrors;
  return (
    <div className="form__section">
      <div className="container form__container">
        <form className="form form__login" onSubmit={handleLoginSubmit}>
          <div className="form__title">
            <h2>Welcome to</h2>
            <Logo size="medium" />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__lb">
              Email
            </label>
            <input
              type="text"
              className="form__ip"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <span className="form__error">{emailError}</span>
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__lb">
              Password
            </label>
            <input
              type="password"
              className="form__ip"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <span className="form__error">{passError}</span>
          </div>
          <div className="form__option">
            <span>Don't have an account?</span>
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </div>
          <div className="form__btn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
