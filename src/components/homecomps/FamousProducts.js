import React from "react";
import famous from "../../assests/images/famous-1.webp";
import famous2 from "../../assests/images/famous-2.webp";
import famous3 from "../../assests/images/famous-3.webp";
import famous4 from "../../assests/images/famous-4.webp";
export default function FamousProducts() {
  return (
    <>
      <section className="famous-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-3">
              <div className="famous-card position-relative">
                <img src={famous} alt="famous" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From Rs10000 or 500/mo. for 24 months</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="famous-card position-relative">
                <img src={famous2} alt="famous" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From Rs10000 or 500/mo. for 24 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
