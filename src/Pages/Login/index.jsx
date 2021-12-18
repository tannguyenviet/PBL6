import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Context from "../../Context/Context";
import API from "../../API";
import "./Login.scss";
import Logo from "../../components/Layouts/Logo";
import { toast } from "react-toastify";

// const isEmail = (email) => {
//   const regex =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return regex.test(String(email).toLowerCase());
// };

function LoginForm(props) {
  //Context
  const context = useContext(Context);

  //States
  const [loginInfo, setLoginInfo] = useState({
    username: "",
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
    const { username, password } = loginInfo;

    if (!username || username.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is empty",
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
      const url = "/account/login";
      const data = loginInfo;
      const config = {
        headers: {
          ContentType: "application/json",
        },
      };
      try {
        const res = await API.post(url, data, config);
        localStorage.setItem("user_info", JSON.stringify(res.info));
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("isLogined", true);
        context.setLogined(true);
        context.setLoading(true);
        setTimeout(() => {
          context.setLoading(false);
          props.history.push("/");
        }, 1000);
      } catch (error) {
        setFormErrors({
          username: "Username or Password is not correct",
          password: "Username or Password is not correct",
        });
        toast.error(error.message);
      }
    }
  };

  //Render
  const { username, password } = loginInfo;
  const { username: usernameError, password: passError } = formErrors;
  return (
    <div className="form__section">
      <div className="container form__container">
        <form className="form form__login" onSubmit={handleLoginSubmit}>
          <div className="form__title">
            <h2>Welcome to</h2>
            <Logo size="medium" />
          </div>
          <div className="form__group">
            <label htmlFor="username" className="form__lb">
              Username
            </label>
            <input
              type="text"
              className="form__ip"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            <span className="form__error">{usernameError}</span>
          </div>
          <div className="form__group">
            <label htmlFor="password" className="form__lb">
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
