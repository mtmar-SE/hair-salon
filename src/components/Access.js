import React from "react";
import "../assets/styles/access.css";

const Access = () => {
  return (
    <section id="access">
      <div className="box">
        <p className="title-access">Access</p>
        <div className="access-wrap">
          <div className="access-txt">
            <h2 className="access-name">BREAIR青山xFBeauty</h2>
            <p className="access-desc">【店舗】BREAIR青山xFBeauty</p>
            <p className="access-desc">
              【住所】東京都港区南青山5丁目10-13 デコパージュ南青山ビル 1F
            </p>
            <p className="access-desc">
              【営業時間】月 20:30-22:00 火 09:00-12:00 水 20:30-22:00 <br></br>
              木 20:30-22:00 金 21:30-23:00 土 21:30-23:00 日 21:30-23:00
              <br></br> 祝 21:30-23:00 火曜日は定休日になるので
              何時でも施術可能です！
            </p>
            <p className="access-desc">【定休日】: 火曜（要相談）</p>
            <p className="access-desc">
              【アクセス】表参道駅B3 B1 出口から徒歩5分
            </p>
          </div>
          <div className="google-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5946333628926!2d139.70901701555456!3d35.6623577386136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5719e5db13%3A0x288dc68850ae783!2zQlJFQUlS6Z2S5bGxIHggRkJlYXV0eQ!5e0!3m2!1sja!2sjp!4v1622607448578!5m2!1sja!2sjp"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
