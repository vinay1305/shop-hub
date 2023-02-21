import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from "../../../assests/images/brand-01.png";
import brand2 from "../../../assests/images/brand-02.png";
import brand3 from "../../../assests/images/brand-03.png";
import brand4 from "../../../assests/images/brand-04.png";
import brand5 from "../../../assests/images/brand-05.png";
import brand6 from "../../../assests/images/brand-06.png";
import brand7 from "../../../assests/images/brand-07.png";
import brand8 from "../../../assests/images/brand-08.png";

export default function HomeMarque() {
  return (
    <>
      <section className="marque-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
