import React, { useState } from "react";

function ProfileForm(props) {
  //States
  const [userInfo, setUserInfo] = useState(() => {
    const userInfo = JSON.parse(localStorage.getItem("user_info"));
    console.log(userInfo);
    return userInfo;
  });

  //Functions
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("abc");
  };

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const { username, name, email, phone, address, gender, birthday } = userInfo;

  return (
    <form
      className="profile__form"
      id="profile__form"
      onSubmit={handleFormSubmit}
    >
      <div className="profile__content">
        <div className="profile__info">
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
                value={name}
                readOnly
              />
              <span className="form__error"></span>
            </div>
          </div>
          <div className="form__row">
            <div className="form__group">
              <label htmlFor="point" className="form__lb">
                Point
              </label>
              <input type="text" className="form__ip" name="point" readOnly />
              <span className="form__error"></span>
            </div>
            <div className="form__group">
              <label htmlFor="phone" className="form__lb">
                Phone
              </label>
              <input
                type="text"
                className="form__ip"
                name="phone"
                value={phone}
                readOnly
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
          </div>
          <div className="form__row">
            <div className="form__group">
              <label htmlFor="birthday" className="form__lb">
                Birthday
              </label>
              <input
                type="text"
                className="form__ip"
                name="birthday"
                value={birthday.slice(0, 10)}
                readOnly
              />
              <span className="form__error"></span>
            </div>
            <div className="form__group">
              <label htmlFor="gender" className="form__lb">
                Gender
              </label>
              <input
                type="text"
                className="form__ip"
                name="gender"
                value={gender ? "Male" : "Female"}
                readOnly
              />
              <span className="form__error"></span>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-proceed" type="submit">
        Save
      </button>
    </form>
  );
}

export default ProfileForm;
