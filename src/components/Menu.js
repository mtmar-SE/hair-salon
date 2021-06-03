import React from "react";
import "../assets/styles/menu.css";
import Model from "../assets/img/Model.jpg";
import Ikumu from "../assets/img/Ikumu.jpg";
import Motoki from "../assets/img/Motoki.jpg";

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
              技術向上のためメンズカットモデルを募集してます。マッシュのスタイルのみ営業時間外での施術になりますのでご注意下さい！<br></br>
              【※口コミを書いていただける方限定です‍】
            </p>
            <h3 className="menu-bill">¥0円（税込）</h3>
          </div>
          <div className="menu-cards">
            <img className="menu-img" src={Ikumu} alt="menu" />
            <h2 className="menu-title">Color</h2>
            <p className="menu-desc">
              メンズ限定でカラーモデルさんを募集しています。ブリーチなしのワンカラーになります。営業時間外での施術になりますのでご注意ください！<br></br>
              【※1日1人限定です】
            </p>
            <h3 className="menu-bill">¥1500円（税込）</h3>
          </div>
          <div className="menu-cards">
            <img className="menu-img" src={Motoki} alt="menu" />
            <h2 className="menu-title">Photo Shoot</h2>
            <p className="menu-desc">
            セットをさせてもらった後に撮影させて頂きます。マッシュ、センターパート、ウルフなどのスタイルだと嬉しいです<br></br>【※フェード、ブレイズなどの特殊なスタイルはお断りします】
            </p>
            <h3 className="menu-bill">¥0円（税込）</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
