import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import API from "../../API";

function ProfileForm(props) {
  //States
  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    birthday: "",
  });
  const [formErrors, setFormErrors] = useState({
    password: "",
    newpass: "",
    confirm: "",
  });

  useEffect(() => {
    const getprofileInfo = async () => {
      const url = `/account/${userInfo.id}`;
      const res = await API.get(url);
      if (res) {
        delete res.password;
        setProfileInfo(res);
      }
    };
    getprofileInfo();
  }, [userInfo.id]);

  //Functions
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updateInfo = {
      name: profileInfo.name,
      birthday: profileInfo.birthday,
      gender: profileInfo.gender === "1" ? true : false,
      phone: profileInfo.phone,
      address: profileInfo.address,
    };
    const url = `/account/info/${profileInfo.id}`;
    const res = await API.put(url, updateInfo);
    if (res) {
      localStorage.setItem("user_info", JSON.stringify(profileInfo));
      toast.success("Update successfully");
    }
  };

  const handleInputChange = (e) => {
    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!profileInfo.password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "This field is required",
      }));
    }
    if (!profileInfo.newpass) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        newpass: "This field is required",
      }));
    }
    if (!profileInfo.confirm) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirm: "This field is required",
      }));
    }
  };

  const { username, name, email, phone, address, gender, birthday } =
    profileInfo;
  return (
    <Container>
      <div className="profile__form" id="profile__form">
        <div className="profile__content">
          <form className="profile__info" onSubmit={handleFormSubmit}>
            <div className="form__group">
              <label htmlFor="email" className="form__lb">
                Email
              </label>
              <input
                type="text"
                className="form__ip"
                name="email"
                readOnly
                value={email}
              />
              <span className="form__error"></span>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="username" className="form__lb">
                  Username
                </label>
                <input
                  type="text"
                  className="form__ip"
                  name="username"
                  value={username}
                  readOnly
                />
                <span className="form__error"></span>
              </div>
              <div className="form__group">
                <label htmlFor="name" className="form__lb">
                  Name
                </label>
                <input
                  type="text"
                  className="form__ip"
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                />
                <span className="form__error"></span>
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
                  onChange={handleInputChange}
                  value={phone}
                />
                <span className="form__error"></span>
              </div>
              <div className="form__group">
                <label htmlFor="address" className="form__lb">
                  Address
                </label>
                <input
                  type="text"
                  className="form__ip"
                  name="address"
                  value={address}
                  onChange={handleInputChange}
                />
                <span className="form__error"></span>
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
                      checked={gender === true || gender === "1"}
                      onChange={handleInputChange}
                    />
                    Male
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="gender"
                      value="0"
                      checked={gender === false || gender === "0"}
                      onChange={handleInputChange}
                    />
                    Female
                  </span>
                </div>
                <span className="form__error"></span>
              </div>
            </div>
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="birthday" className="form__lb">
                  Birthday
                </label>
                <input
                  type="date"
                  className="form__ip"
                  name="birthday"
                  value={birthday.slice(0, 10)}
                  onChange={handleInputChange}
                />
                <span className="form__error"></span>
              </div>
              <div className="form__group">
                <label htmlFor="point" className="form__lb">
                  Point
                </label>
                <input type="text" className="form__ip" name="point" readOnly />
                <span className="form__error"></span>
              </div>
            </div>
            <button className="btn btn-proceed" type="submit">
              Save
            </button>
          </form>
          <form
            action=""
            className="profile__password"
            onSubmit={handleChangePassword}
          >
            <div className="form__group">
              <label htmlFor="email" className="form__lb">
                Current Password
              </label>
              <input
                type="password"
                className="form__ip"
                name="password"
                onChange={handleInputChange}
              />
              <span className="form__error">{formErrors.password}</span>
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__lb">
                New Password
              </label>
              <input
                type="password"
                className="form__ip"
                name="newpass"
                onChange={handleInputChange}
              />
              <span className="form__error">{formErrors.newpass}</span>
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__lb">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form__ip"
                name="confim"
                onChange={handleInputChange}
              />
              <span className="form__error">{formErrors.confirm}</span>
            </div>
            <button className="btn btn-proceed" type="submit">
              Change
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ProfileForm;
