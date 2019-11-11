import React from "react";
import "./profile.module.css";
import s from "./profile.module.css";
import { Redirect } from "react-router-dom";

const Profile = () => {

  let login = window.localStorage.getItem("login");
  let pass = window.localStorage.getItem("pass");

  if(login == "Admin" && pass == "12345" ){
    return (
      <div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtEv4r2gGkb1YB7T3R9kDu0jUPnhUhTXDxis8RZpZv5_W-yPQ&s" />
          <h2>My name</h2>
        </div>
      </div>
    );
  } else return <Redirect to="login" />;
}
  

export default Profile;
