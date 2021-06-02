import React from "react";
import "../assets/styles/first.css";
import Hosei from "../assets/img/Hosei.jpg";

const First = () => {
  return (
    <div className="first-v">
      <div className="first-txt">
        <h1 className="first-name">松沼奉成</h1>
        <h1 className="second-name">HoseiMatunuma.</h1>
      </div>
      <div className="first-img">
        <img className="hosei-img" src={Hosei} alt="" />
      </div>
    </div>
  );
};

export default First;
