import React from "react";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Showtime from "./pages/Showtime";
import Users from "./pages/Users";
import NotFoundPage from "../NotFoundPage";
import Movies from "./pages/Movies";

function AdminPage() {
  const history = useHistory();
  const match = useRouteMatch();
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  //Fix into role_id !== 1
  if (!userInfo || userInfo.role_id !== 1) {
    history.replace("/login");
  }

  return (
    <App>
      <Switch>
        <Route path={match.url} exact component={Dashboard} />
        <Route path={`${match.url}/member`} />
        <Route path={`${match.url}/movies`} component={Movies} />
        <Route path={`${match.url}/showtime`} component={Showtime} />
        <Route path={`${match.url}/theater`} />
        <Route path={`${match.url}/ticket`} />
        <Route path={`${match.url}/users`} component={Users} />
        {/* <Route path={`${match.url}/staff`} />
        <Route path={`${match.url}/member`} /> */}
        <Route default component={NotFoundPage} />
      </Switch>
    </App>
  );
}

export default AdminPage;
