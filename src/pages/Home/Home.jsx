import React from "react";
import { Link } from "react-router-dom";
import HeroCarts from "./HeroCarts";
import FirstCartImage from "../../Assets/images/catbanner-01.jpg";
import SecondCartImage from "../../Assets/images/catbanner-02.jpg";
import ThirdCartImage from "../../Assets/images/catbanner-03.jpg";
import FourthCartImage from "../../Assets/images/catbanner-04.jpg";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={require("../../Assets/images/main-banner-1.jpg")}
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4 className="text-uppercase">Supercharged for pros.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.0 or $42.00/m</p>
                  <Link className="button text-uppercase">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 align-items-center justify-content-center">
                <HeroCarts
                  cartImage={FirstCartImage}
                  subHeading="Supercharged for pros."
                  title="iPad S13+ Pro"
                  para="From $999.0 or $42.00/m"
                />
                <HeroCarts
                  cartImage={SecondCartImage}
                  subHeading="Best Sake."
                  title="iPad S13+ Pro"
                  para="From $999.0 or $42.00/m"
                />
                <HeroCarts
                  cartImage={ThirdCartImage}
                  subHeading="New Arrival."
                  title="iPad S13+ Pro"
                  para="From $999.0 or $42.00/m"
                />
                <HeroCarts
                  cartImage={FourthCartImage}
                  subHeading="Supercharged for pros."
                  title="iPad S13+ Pro"
                  para="From $999.0 or $42.00/m"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center gap-30 px-5">
              <div className="d-flex gap-15">
                <BsLinkedin className="fs-4 text-black"/>
                <div className="feature-content">
                  <h5>Free Shipping</h5>
                  <p>From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex gap-15">
                <BsLinkedin className="fs-4 text-black"/>
                <div className="feature-content">
                  <h5>Free Shipping</h5>
                  <p>From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex gap-15">
                <BsLinkedin className="fs-4 text-black"/>
                <div className="feature-content">
                  <h5>Free Shipping</h5>
                  <p>From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex gap-15">
                <BsLinkedin className="fs-4 text-black"/>
                <div className="feature-content">
                  <h5>Free Shipping</h5>
                  <p>From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex gap-15">
                <BsLinkedin className="fs-4 text-black"/>
                <div className="feature-content">
                  <h5>Free Shipping</h5>
                  <p>From all orders over $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
