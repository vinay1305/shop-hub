import React from "react";
import watch from "../../assests/images/watch.jpg";
import ReactStars from "react-rating-stars-component";
export default function SpecialProducts() {
  return (
    <>
      <div className="col-md-4">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src={watch} alt="watch" className="img-fluid" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Smart Watch</h5>
              <h6 className="title">Samsung Galaxy Watch 4 </h6>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                value={3}
                activeColor="#ffd700"
              />
              <p className="price mb-0">
                <span className="red-p">
                  <strike>Rs12000</strike> Rs10000
                </span>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-2 bg-warning">1</span>:
                  <span className="badge rounded-circle p-2 bg-warning">1</span>:
                  <span className="badge rounded-circle p-2 bg-warning">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
