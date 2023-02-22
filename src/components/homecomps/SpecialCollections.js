import React from "react";
import SpecialProducts from "./SpecialProducts";

export default function SpecialCollections() {
  return (
    <>
      <section className="special-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>
        </div>
      </section>
    </>
  );
}
