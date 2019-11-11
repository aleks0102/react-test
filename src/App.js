import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Content from "./components/content/content";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
