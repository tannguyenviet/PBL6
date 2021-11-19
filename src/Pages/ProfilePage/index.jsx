import React, { useState } from "react";
import "./ProfilePage.scss";

function ProfilePage(props) {
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

  //Render
  return (
    <section className="profile__section">
      <div className="container profile__container">
        <div className="profile__bar">
          <div className="profile__tab">Account</div>
          <div className="profile__tab">History</div>
          <div className="profile__underline"></div>
        </div>
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
                  <input
                    type="text"
                    className="form__ip"
                    name="point"
                    readOnly
                  />
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
            <div className="profile__password">
              <div className="form__group">
                <label htmlFor="password" className="form__lb">
                  Password
                </label>
                <input type="password" className="form__ip" name="password" />
                <span className="form__error"></span>
              </div>
              <div className="form__group">
                <label htmlFor="newpass" className="form__lb">
                  New Password
                </label>
                <input type="password" className="form__ip" name="newpass" />
                <span className="form__error"></span>
              </div>
              <div className="form__group">
                <label htmlFor="confirm" className="form__lb">
                  Confirm New Password
                </label>
                <input type="password" className="form__ip" name="confirm" />
                <span className="form__error"></span>
              </div>
            </div>
          </div>
          <button className="btn btn-proceed" type="submit">
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

export default ProfilePage;
