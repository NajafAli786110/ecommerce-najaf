import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";
const HeroCarts = (props) => {
  return (
    <>
      <div className="small-banner position-relative">
        <img
          src={props.cartImage}
          alt="main-banner"
          className="img-fluid rounded-3"
        />
        <div className="small-banner-content position-absolute">
          <h4 className="text-uppercase">{props.subHeading}</h4>
          <h5>{props.title}</h5>
          <p>{props.para}</p>
          <Link className="button text-uppercase">Buy Now</Link>
        </div>
      </div>
    </>
  );
};

export default HeroCarts;
