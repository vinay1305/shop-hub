import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsChevronDown, BsSearch } from "react-icons/bs";
export default function HeaderTop() {
  return (
    <>
      <header className="header-top-strip py-2">
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
                    Hotline: 
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
    </>
  );
}
