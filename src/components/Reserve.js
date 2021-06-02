import React from "react";
import "../assets/styles/reserve.css";
import Hosei2 from "../assets/img/Hosei2.jpg";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "@material-ui/core/Link";

const Footer = () => {
  return (
    <section id="reserve">
      <div className="reserve-box">
        <hr></hr>
        <div className="reserve-txt">
          <img className="my-icon" src={Hosei2} alt="me" />
          <h1 className="reserve-title">Hosei Salon</h1>
          <div className="icon-box">
            <Link href="https://www.instagram.com/hosei.0302" target="_blank">
              <InstagramIcon
                className="myicon"
                style={{ fontSize: 40, color: "#809eae", marginRight: 20 }}
              />
            </Link>
            <div class="container">
              <a
                href="https://minimodel.jp/r/ud7YQaZ/photo?photo_id=hk6cZEHXriBp8pGp0znKkdfLiAgJ5eUm&from=catalogue&photo_order=5"
                class="btn-box"
              >
                Minimoで予約
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
