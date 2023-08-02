import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5 d-flex">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img
                  src={require("../Assets/images/newsletter.png")}
                  alt="Newsletter"
                />
                <h2 className="mb-0 text-white">Subscribe For NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  Demo Store
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  75230 No.1201 Shah Faisal Colony, Karachi
                </Link>
                <Link className="text-white py-2 mb-1" to="tel:+92 3172516088">
                  +92 3172516088
                </Link>
                <Link
                  className="text-white py-2 mb-1"
                  to="mailto:najaf.balti000@gmail.com"
                >
                  najaf.balti000@gmail.com
                </Link>
                <div className="footer-socials pt-3 d-flex gap-30">
                  <Link>
                    <BsLinkedin className="text-white fs-4" />
                  </Link>
                  <Link>
                    <BsFacebook className="text-white fs-4" to='https://www.facebook.com/mrazsskardu123/'/>
                  </Link>
                  <Link>
                    <BsGithub className="text-white fs-4" />
                  </Link>
                  <Link>
                    <BsYoutube className="text-white fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Terms & Conditons
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Bogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  FAQ's
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">
                &#169; {new Date().getFullYear()}; Powered By{" "}
                <b>ShopGlobalXpress.com</b>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
