import React from "react";
// import camera from "../../../assests/images/camera.jpg";
// import smarttv from "../../../assests/images/tv.jpg";

import headphones from "../../assests/images/headphone.jpg";
import camera from "../../assests/images/camera.jpg";
import smarttv from "../../assests/images/tv.jpg";

export default function HomeCategories() {
  return (
    <>
      <div className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Music &Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphones} alt="headphones" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={smarttv} alt="smart-tv" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="watch" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Music &Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphones} alt="headphones" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={smarttv} alt="smart-tv" />
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="watch" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
