import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import compare from "../assests/images/compare.svg";
import wishlist from "../assests/images/wishlist.svg";
import user from "../assests/images/user.svg";
import cart from "../assests/images/cart.svg";
export default function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-0">
                Free Shipping Over Rs1000 & Free Returns
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-end text-white mb-0">
                    Hotline: {+91}
                    <Link className="text-white" to="tel: +91 88819 87300">
                      +91 88819 87300
                    </Link>
                  </p>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <p className="text-white mb-0">
                    English <BsChevronDown />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-1">
        <div className="container py-1">
          <div className="row align-items-center">
            <div className="col-md-2">
              <h2>
                <Link className="text-white">Shop Hub.</Link>
              </h2>
            </div>
            <div className="col-md-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={compare} alt="compare" />
                    <p>
                      {" "}
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlist} alt="wishlist" />
                    <p>
                      {" "}
                      Favourite <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="user" />
                    <p>
                      {" "}
                      Log into <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p>Rs5000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
