import React from "react";
import "../assets/styles/menu.css";
import Model from "../assets/img/model2.jpeg";

const Menu = () => {
  return (
    <section id="menu">
      <div className="wrap">
        <p className="title">Menu</p>
        <div className="menu-main">
          <div className="menu-cards">
            <img className="menu-img" src={Model} alt="menu" />
            <h2 className="menu-title">Cut</h2>
            <p className="menu-desc">
              髪をカットできます。メンズ専門でマッシュスタイルやウルフスタイルが得意です。お客様に合わせてカットするので気楽にご来店ください。
            </p>
            <h3 className="menu-bill">¥1000円（税込）</h3>
          </div>
          <div className="menu-cards">
            <img className="menu-img" src={Model} alt="menu" />
            <h2 className="menu-title">Cut</h2>
            <p className="menu-desc">
              髪をカットできます。メンズ専門でマッシュスタイルやウルフスタイルが得意です。お客様に合わせてカットするので気楽にご来店ください。
            </p>
            <h3 className="menu-bill">¥1000円（税込）</h3>
          </div>
          <div className="menu-cards">
            <img className="menu-img" src={Model} alt="menu" />
            <h2 className="menu-title">Cut</h2>
            <p className="menu-desc">
              髪をカットできます。メンズ専門でマッシュスタイルやウルフスタイルが得意です。お客様に合わせてカットするので気楽にご来店ください。
            </p>
            <h3 className="menu-bill">¥1500円（税込）</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
