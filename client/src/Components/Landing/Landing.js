import React from "react";
import "./Landing.scss";
import cuff from "../../assets/pictures/products/cuffs/MarblePattern1.jpeg";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <h3 className="landing__txt">Trendy jewelry at an affordable price.</h3>
        <img className="landing__img1" src={cuff} alt="White marble cuff" />
        <div className="landing__news">
          <div className="landing__newsbox">
            <h2 className="landing__newshead">Subscribe to our newsletter</h2>
            <h5 className="landing__newstxt">
              Promotions, new products and sales. Directly to your inbox.
            </h5>
          </div>
          <div className="landing__email">
            <input
              className="landing__input"
              type="text"
              placeholder="Your email"
            ></input>
            <button className="langing__button" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
