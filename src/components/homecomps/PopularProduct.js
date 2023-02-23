import React from "react";
import ProductCart from "./ProductCart";
export default function PopularProduct() {
  return (
    <>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-heading">Our Popular Collections</h3>
            </div>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
    </>
  );
}
