import React from "react";
import "../assets/styles/concept.css";
import Model1 from "../assets/img/model1.jpeg";
import Model2 from "../assets/img/model2.jpeg";

const Concept = () => {
  return (
    <section id="concept">
      <div className="concept-main">
        <p className="title-concept">Concept</p>
        <div className="concept-img">
          <img className="model1" src={Model1} alt="" />
          <img className="model2" src={Model2} alt="" />
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
