import React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.wrap}>
      <ul className={s.nav}>
        <li>
          <Link to="/">На главную</Link>
        </li>
        <li>
          <Link to="/profile">Мой профиль</Link>
        </li>
        <li>
          <Link to="/news">Новости</Link>
        </li>
        <li>
          <Link to="/login">Войти</Link>
        </li>
      </ul>
      </div>
  );
};

export default Header;
