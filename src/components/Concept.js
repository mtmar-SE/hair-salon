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
          <h2 className="concept-theme">Men's Expart</h2>
          <p className="concept-desc">
          メンズ専門の美容師です。アシスタント/研修歴 1年<br></br>
          マッシュ・センターパート・ウルフスタイルが得意です！
          お客様の骨格に合わせた似合わせカット、パーソナルカラーに合わせたカラーをご提案させて頂きます。<br></br>
          ぜひ皆様のご来店をお待ちしております!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Concept;
