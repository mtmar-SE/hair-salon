import React from "react";
import "../assets/styles/concept.css";
import Reiya from "../assets/img/Reiya.jpg";
import Ibuki from "../assets/img/Ibuki.jpg";

const Concept = () => {
  return (
    <section id="concept">
      <div className="concept-main">
        <p className="title-concept">Concept</p>
        <div className="concept-img">
          <img className="model1" src={Reiya} alt="" />
          <img className="model2" src={Ibuki} alt="" />
        </div>
        <div className="concept-wrap">
          <h2 className="concept-theme">Men'sExpart</h2>
          <p className="concept-desc">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </section>
  );
};

export default Concept;
