import React from "react";
// import { Link } from "react-router-dom";
import "./Header.scss";
// import shopping_cart from "../../assets/icons/shopping-cart.svg";
import malibu from "../../assets/logos/malibu.png";

const Header = () => {
  return (
    <>
      <div className="topBar">
        <div className="cart__container">
          <div className="topBar__cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
            Cart
          </div>
          <div className="topBar__search">
            <input
              className="topBar__searchInput"
              type="text"
              placeholder="Search"
            ></input>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero__logo">
          <img
            className="hero__logo--pic"
            src={malibu}
            alt="Malibu Spark logo"
          />
        </div>
        <div className="hero__navbar">
          <h3 className="hero__txt">Home</h3>
          <h3 className="hero__txt">Necklaces</h3>
          <h3 className="hero__txt">Rings</h3>
          <h3 className="hero__txt">Cuffs/Bangles</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
