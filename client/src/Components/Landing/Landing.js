import React from "react";
import "./Landing.scss";
import cuff from "../../assets/pictures/products/cuffs/MarblePattern1.jpeg";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <h3 className="landing__txt">Trendy jewelry at an affordable price.</h3>
        <img className="landing__img1" src={cuff} alt="White marble cuff" />
      </div>
    </>
  );
};

export default Landing;
