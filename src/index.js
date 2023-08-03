import React from "react";
import ReatDOM from "react-dom";
import Imagesection from "./components/Imagesection";
import Main from "./components/Main";
import Header from "./components/Header";

import "./style.css";
import Footer from "./components/Footer";

ReatDOM.render(
  <div className="container">
    <Imagesection></Imagesection>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>,
  document.getElementById("root")
);
