import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import compare from "../../assests/images/compare.svg";
import wishlist from "../../assests/images/wishlist.svg";
import user from "../../assests/images/user.svg";
import cart from "../../assests/images/cart.svg";
export default function HeaderMiddle() {
  return (
    <>
      <header className="header-upper py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-2">
              <h4>
                <Link className="text-white">Shop Hub.</Link>
              </h4>
            </div>
            <div className="col-md-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
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
                    <p className="mb-0">
                      {" "}
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      {" "}
                      Favourite <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      {" "}
                      Log into <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column ">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">Rs5000</p>
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
