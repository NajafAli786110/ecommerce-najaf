import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "../App.css";
import { GoGitCompare } from "react-icons/go";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 ">
              <p className="text-white mb-0">Shipping Charges Free</p>
            </div>
            <div className="col-6 text-end">
              <p className="text-white mb-0">
                Hotline Number:
                <a className="text-white" href="tel:+92 3172516088">
                  +92 3172516088
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="mb-0">
                <Link to="/" className="text-white">
                  Developers.
                </Link>
              </h2>
            </div>
            <div className="col-5 mb-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search products... "
                  aria-label="Search products... "
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex gap-3 justify-content-end">
                <div className="d-flex">
                  <Link className="d-flex align-items-center gap-10">
                    <GoGitCompare className="compare-image text-light" />
                    <p className="mb-0 text-white">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div className="d-flex">
                  <Link className="d-flex align-items-center gap-10">
                    <AiOutlineHeart className="compare-image text-light" />
                    <p className="mb-0 text-white">
                      Favorite <br />
                      Wishlits
                    </p>
                  </Link>
                </div>
                <div className="d-flex">
                  <Link className="d-flex align-items-center gap-10">
                    <FaRegUser className="compare-image text-light" />
                    <p className="mb-0 text-white">
                      Log in
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div className="d-flex">
                  <Link className="d-flex align-items-center gap-10">
                    <AiOutlineShoppingCart className="compare-image text-light" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0 text-white">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <BiCategoryAlt className="text-white compare-image me-2" />
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="pe-3">Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu p-0">
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white mb-0" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
