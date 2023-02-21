import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import menu from "../../assests/images/menu.svg";
export default function HeaderBottom() {
  return (
    <>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="menu" /> <span className="me-5 d-inline-block">Shop Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <NavLink className="dropdown-item" to={""}>
                          Action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to={""}>
                          Another action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to={""}>
                          Something else here
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/"}>Our Store</NavLink>
                    <NavLink to={"/"}>Blogs</NavLink>
                    <NavLink to={"/contact"}>Contacts</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
