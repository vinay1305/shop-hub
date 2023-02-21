import React from "react";
import { Link } from "react-router-dom";
import mainBanner from "../../assests/images/main-banner-1.jpg";
import catBanner from "../../assests/images/catbanner-01.jpg";
import catBannerSecond from "../../assests/images/catbanner-02.jpg";
import catBannerThird from "../../assests/images/catbanner-03.jpg";
import catBannerForth from "../../assests/images/catbanner-04.jpg";
export default function HomeWrapper() {
  return (
    <>
      <div className="home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <div className="main-banner  position-relative">
                <img
                  src={mainBanner}
                  alt="main_banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From Rs80000 or Rs5000/mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src={catBanner}
                    alt="main_banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From Rs80000 <br/>or Rs5000/mo</p>
                  </div>
                </div>

                <div className="small-banner  position-relative">
                  <img
                    src={catBannerSecond}
                    alt="main_banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad</h5>
                    <p>From Rs80000 <br/>or Rs5000/mo</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src={catBannerThird}
                    alt="main_banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad</h5>
                    <p>From Rs80000 <br/>or Rs5000/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catBannerForth}
                    alt="main_banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad</h5>
                    <p>From Rs80000 <br/>or Rs5000/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
