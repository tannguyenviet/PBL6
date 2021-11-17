import React, { useState } from "react";
import { Link } from "react-router-dom";

import API from "../../API";
import ToastMessage from "../../components/Layouts/ToastMessage";
import Logo from "../../components/Layouts/Logo";

const isEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

function Register() {
  //States
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirm: "",
    phone: "",
    address: "",
    birthday: "",
    gender: "1",
  });
  const [formErrors, setFormErrors] = useState({});
  const [toastMessage, setToastMessage] = useState();

  //Functions
  const handleInputChange = (e) => {
    const newRegisterInfo = {
      ...registerInfo,
      [e.target.name]: e.target.value,
    };
    setRegisterInfo(newRegisterInfo);
  };

  //Submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    let flag = true;
    const {
      username,
      name,
      email,
      password,
      confirm,
      phone,
      address,
      birthday,
    } = registerInfo;
    if (!username || username.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is empty",
      }));
      flag = false;
    }
    if (!name || name.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is empty",
      }));
      flag = false;
    }

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
    if (!confirm || confirm !== password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirm: "Password does not match",
      }));
      flag = false;
    }
    if (isNaN(phone)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone must be number",
      }));
      flag = false;
    }
    if (!phone || phone.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone is empty",
      }));
      flag = false;
    }
    if (!address || address.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        address: "Address is empty",
      }));
      flag = false;
    }
    if (!birthday || birthday.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        birthday: "Birthday is empty",
      }));
      flag = false;
    }

    if (flag) {
      const url = "/account/register";
      const data = { ...registerInfo };
      delete data.confirm;
      data["role_id"] = 3;
      data.gender = Boolean(parseInt(data.gender));
      const config = {
        headers: {
          ContentType: "application/json",
        },
      };

      try {
        const res = await API.post(url, data, config);
        if (res.status === 200) {
          setToastMessage({ type: "success" });
        } else {
          setToastMessage({ type: "error" });
        }
        console.log(res);
      } catch (error) {
        setToastMessage({
          type: "error",
          mess: "Username exsisted",
        });
        console.log("error: ", error);
      }

      setRegisterInfo({
        username: "",
        name: "",
        email: "",
        password: "",
        confirm: "",
        phone: "",
        address: "",
        birthday: "",
        gender: "1",
      });
    }
  };

  //Render
  const { username, name, email, password, confirm, phone, address, birthday } =
    formErrors;
  return (
    <div className="form__section">
      {toastMessage && (
        <ToastMessage mess={toastMessage} setMess={setToastMessage} />
      )}
      <div className="container form__container">
        <form className="form form__register" onSubmit={handleRegisterSubmit}>
          <h2 className="form__title">
            <span>Sign up to</span>
            <Logo size="medium" />
          </h2>
          <div className="form__group">
            <label htmlFor="username" className="form__lb">
              Username
            </label>
            <input
              type="text"
              className="form__ip"
              name="username"
              value={registerInfo.username}
              onChange={handleInputChange}
            />
            <span className="form__error">{username}</span>
          </div>
          <div className="form__group">
            <label htmlFor="name" className="form__lb">
              Name
            </label>
            <input
              type="text"
              className="form__ip"
              name="name"
              value={registerInfo.name}
              onChange={handleInputChange}
            />
            <span className="form__error">{name}</span>
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__lb">
              Email
            </label>
            <input
              type="text"
              className="form__ip"
              name="email"
              value={registerInfo.email}
              onChange={handleInputChange}
            />
            <span className="form__error">{email}</span>
          </div>
          <div className="form__row">
            <div className="form__group">
              <label htmlFor="password" className="form__lb">
                Password
              </label>
              <input
                type="password"
                className="form__ip"
                name="password"
                value={registerInfo.password}
                onChange={handleInputChange}
              />
              <span className="form__error">{password || ""}</span>
            </div>
            <div className="form__group">
              <label htmlFor="confirm" className="form__lb">
                Confirm Password
              </label>
              <input
                type="password"
                className="form__ip"
                name="confirm"
                value={registerInfo.confirm}
                onChange={handleInputChange}
              />
              <span className="form__error">{confirm}</span>
            </div>
          </div>
          <div className="form__row">
            <div className="form__group">
              <label htmlFor="phone" className="form__lb">
                Phone
              </label>
              <input
                type="text"
                className="form__ip"
                name="phone"
                value={registerInfo.phone}
                onChange={handleInputChange}
              />
              <span className="form__error">{phone}</span>
            </div>
            <div className="form__group">
              <label htmlFor="address" className="form__lb">
                Address
              </label>
              <input
                type="text"
                className="form__ip"
                name="address"
                value={registerInfo.address}
                onChange={handleInputChange}
              />
              <span className="form__error">{address}</span>
            </div>
          </div>
          <div className="form__row">
            <div className="form__group">
              <label
                htmlFor="birthday"
                className="form__lb"
                onChange={handleInputChange}
              >
                Birthday
              </label>
              <input
                type="date"
                className="form__ip"
                name="birthday"
                value={registerInfo.birthday}
                onChange={handleInputChange}
              />
              <span className="form__error">{birthday}</span>
            </div>
            <div className="form__group">
              <label htmlFor="gender" className="form__lb">
                Gender
              </label>
              <div className="form__ip ip__gender">
                <span>
                  <input
                    type="radio"
                    name="gender"
                    value="1"
                    onChange={handleInputChange}
                    checked={registerInfo.gender === "1"}
                  />{" "}
                  Male
                </span>
                <span>
                  <input
                    type="radio"
                    name="gender"
                    value="0"
                    checked={registerInfo.gender === "0"}
                    onChange={handleInputChange}
                  />{" "}
                  Female
                </span>
              </div>
              <span className="form__error"></span>
            </div>
          </div>
          <div className="form__option">
            <span>Already have an account?</span>
            <span>
              <Link to="/login">Login</Link>
            </span>
          </div>
          <div className="form__btn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
