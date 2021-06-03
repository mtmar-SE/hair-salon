import React from "react";
import "../assets/styles/first.css";
import Hosei from "../assets/img/Hosei.jpg";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "@material-ui/core/Link";

const First = () => {
  return (
    <>
      <div className="first-v">
        <div className="first-txt">
          <h1 className="first-name">松沼奉成</h1>
          <h1 className="second-name">HoseiMatunuma.</h1>
        </div>
        <div className="first-img">
          <img className="hosei-img" src={Hosei} alt="" />
        </div>
      </div>
      <div className="first-pic">
        <div className="card">
          <div className="card-front"></div>
          <div className="card-back">
            <h2 className="card-title">
              Hosei Matunuma <br></br>
              <span className="card-title-second">Hair Designer</span>
            </h2>
            <div className="social-icons">
              <Link href="https://www.instagram.com/hosei.0302" target="_blank">
                <InstagramIcon
                  className="myicon"
                  style={{
                    fontSize: 25,
                    color: "#809eae",
                  }}
                />
              </Link>
              <a
                href="https://minimodel.jp/r/ud7YQaZ/photo?photo_id=hk6cZEHXriBp8pGp0znKkdfLiAgJ5eUm&from=catalogue&photo_order=5"
                class="btn-box"
                style={{ width: "auto" }}
              >
                Minimoで予約
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
