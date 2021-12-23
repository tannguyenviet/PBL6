import React, { useState } from "react";
import API from "../../API";
import { toast } from "react-toastify";
import useLoading from "../../hooks/useLoading";
import "./ForgotPassword.scss";

const isEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState();
  const [showLoading, hideLoading] = useLoading();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let flag = true;
    setFormError("");

    if (!email) {
      setFormError("Email is required");
      flag = false;
    } else if (!isEmail(email)) {
      setFormError("Email is invalid");
      flag = false;
    }

    if (flag) {
      showLoading();
      const url = "/account/reset-password";
      const res = await API.post(url, { email: email });
      if (res) {
        toast.success(res.message);
        hideLoading();
      }
    }
  };

  return (
    <div className="forgot-password__container">
      <form className="forgot-password__form" onSubmit={handleFormSubmit}>
        <h1 className="forgot-password__title">Reset password</h1>
        <input
          type="text"
          className="forgot-password__input"
          id="forgot-password"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
        />
        {formError && <span className="form__error">{formError}</span>}
        <button className="btn btn-reset" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
