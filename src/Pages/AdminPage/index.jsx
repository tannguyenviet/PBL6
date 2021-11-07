import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";

function AdminPage(props) {
  const history = useHistory();
  // const userInfo = JSON.parse(localStorage.getItem("user_info"));
  // if (!userInfo) {
  //   history.replace("/login");
  // }
  return (
    <Dashboard>
      <Switch>
        <Route path="/admin/member" />
        <Route path="/admin/movie" />
        <Route path="/admin/showtime" />
        <Route path="/admin/staff" />
      </Switch>
    </Dashboard>
  );
}

export default AdminPage;
