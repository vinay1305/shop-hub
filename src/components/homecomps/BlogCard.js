import React from "react";

import cardImage from "../../assests/images/blog-1.jpg";
import { Link } from "react-router-dom";
export default function BlogCard() {
  return (
    <div className="col-md-3">
      <div className="blog-card">
        <div className="card-image">
          <img src={cardImage} alt="cardImage" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec,2022</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            consequuntur explicabo officia quae.
          </p>
          <Link to={"/"} className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
