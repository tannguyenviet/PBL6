import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Showtime from "./pages/Showtime";

function AdminPage(props) {
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  if (!userInfo || userInfo.id !== 1) {
    history.replace("/login");
  }
  return (
    <App>
      <Switch>
        <Route path="/admin" exact component={Dashboard} />
        <Route path="/admin/member" />
        <Route path="/admin/movie" />
        <Route path="/admin/showtime" component={Showtime} />
        <Route path="/admin/staff" />
      </Switch>
    </App>
  );
}

export default AdminPage;
