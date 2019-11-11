import React from "react";
import "./App.css";
import Header from "./components/header/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
import News from "./components/news/news";
import Profile from "./components/profile/profile";

const App = () => {
  return (
    <Router>
      <div className="app-wraper">
        <Header />
        <Switch>
          <div className="app-wraper-content">
            <Route path="/main" component={Main} />
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={News} />
            <Route path="/login" component={Login} />
          </div>
        </Switch>
      </div>
    </Router>
  );
};

