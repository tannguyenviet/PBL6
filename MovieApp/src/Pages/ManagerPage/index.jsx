import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import App from "./App";
import ShowTime from "../AdminPage/pages/Showtime";
import "./ManagerPage.scss";

function ManagerPage() {
  const match = useRouteMatch();

  return (
    <App>
      <Switch>
        <Route path={match.url} exact component={ShowTime}></Route>
        <Route path={`${match.url}/add`} />
        <Route path={`${match.url}/:id`} />
        <Route path={`${match.url}/update`} />
      </Switch>
    </App>
  );
}

export default ManagerPage;
