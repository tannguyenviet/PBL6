import React, { useRef } from "react";
import { useState } from "react";
import "./ProfilePage.scss";
import ProfileForm from "./ProfileForm";

function ProfilePage(props) {
  const tabRef = useRef();
  const [tab, setTab] = useState("account");

  const handleTabActive = (e) => {
    const tabUnderline = tabRef.current;
    const tabWidth = e.target.offsetWidth;
    tabUnderline.style.transform = `translateX(${
      e.target.dataset.index * tabWidth
    }px)`;
    if (e.target.dataset.index === "1") {
      setTab("history");
    } else {
      setTab("account");
    }
  };

  //Render
  return (
    <section className="profile__section">
      <div className="container profile__container">
        <div className="profile__bar">
          <div
            className="profile__tab"
            data-index="0"
            onClick={handleTabActive}
          >
            Account
          </div>
          <div
            className="profile__tab"
            data-index="1"
            onClick={handleTabActive}
          >
            History
          </div>
          <div className="profile__underline" ref={tabRef}></div>
        </div>
        {tab === "history" ? <ProfileForm /> : <ProfileForm />}
      </div>
    </section>
  );
}

export default ProfilePage;
