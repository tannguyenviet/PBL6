import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/reset.css";
import App from "./App";
import MyProvider from "./Context/Provider";
// import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MoviePage from "./Pages/MoviePage/";
import MovieDetailPage from "./Pages/MoviePage/MovieDetail";
import TicketPage from "./Pages/TicketPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AdminPage from "./Pages/AdminPage";
import ManagerPage from "./Pages/ManagerPage";
import SeatPage from "./Pages/SeatPage";
import PaymentPage from "./Pages/PaymentPage";
import ProfilePage from "./Pages/ProfilePage";
import BounceLoader from "react-spinners/BounceLoader";

const HomePage = React.lazy(() => import("./Pages/HomePage"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="loading-overlay">
          <BounceLoader loading="true" size={60} color="#bfccfa" />
        </div>
      }
    >
      <Router>
        <MyProvider>
          <App>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/ticket" component={TicketPage} />
              <Route path="/movie/list" component={MoviePage} />
              <Route path="/movie/detail/:id" component={MovieDetailPage} />
              <Route path="/seat" component={SeatPage} />
              <Route path="/payment" component={PaymentPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/manage/showtime" component={ManagerPage} />
              <Route default component={NotFoundPage} />
            </Switch>
          </App>
        </MyProvider>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
