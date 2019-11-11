import React from "react";
import { Route } from "react-router-dom";
import Main from "../content/main/main";
import Profile from "../content/profile/profile";
import Login from "../content/login/login";
import News from "../content/news/news";
import s from "./content.module.css";


const Content = () => {
  return (
    <div className="app-wraper-content">
      <div className={s.wrap}>
        <Route exact path="/" component={Main} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
};

export default Content;
