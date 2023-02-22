import React from "react";
import watch from "../../assests/images/watch.jpg";
import ReactStars from "react-rating-stars-component";
import cart from "../../assests/images/add-cart.svg";
import compare from "../../assests/images/prodcompare.svg";
import view from "../../assests/images/view.svg";
import wish from "../../assests/images/wish.svg";
import watchTwo from "../../assests/images/watch-1.avif";
import { Link } from "react-router-dom";
export default function ProductCart() {
  return (
    <>
      <div className="col-md-3">
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="Wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} alt="productimage" className="img-fluid" />
            <img src={watchTwo} alt="productimage" className="img-fluid" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multicolored for student
            </h5>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={2}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className="price">Rs 10000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={compare} alt="compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={cart} alt="addCart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
