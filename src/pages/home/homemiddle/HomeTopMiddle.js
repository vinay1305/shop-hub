import React from "react";
import services from "../../../assests/images/service.png";

import services2 from "../../../assests/images/service-02.png";
import services3 from "../../../assests/images/service-03.png";
import services4 from "../../../assests/images/service-04.png";
import services5 from "../../../assests/images/service-05.png";
// import services from "../../../assests/images/service.png"
export default function HomeTopMiddle() {
  return (
    <>
      <section className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src={services} alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over Rs999</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={services2} alt="" />
                  <div>
                    <h6>Daily Surprice Offers</h6>
                    <p className="mb-0">Safe upto 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={services3} alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={services4} alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={services5} alt="" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
