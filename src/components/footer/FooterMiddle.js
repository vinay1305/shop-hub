import React from 'react'
import {
    BsSearch,
    BsLinkedin,
    BsGithub,
    BsYoutube,
    BsInstagram,
  } from "react-icons/bs";
  import { Link } from "react-router-dom";
export default function FooterMiddle() {
  return (
   <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Keshav Enclave,Chandrabani Road,
                  <br />
                  DehraDun,Uttrakhand
                </address>
                <Link
                  to={"tel:+91 8881987307"}
                  className="mt-3 d-block mb-2 text-white"
                >
                  +91 8881987307
                </Link>
                <Link
                  to={"mailto:vin.kp.1305@gmail.com"}
                  className="mt-3 d-block mb-0 text-white"
                >
                  vin.kp.1305@gmail.com
                </Link>
                <div className="social_icons d-flex align-items-center gap-30 mt-3">
                  <Link to={""} target="_blank" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link to={""} target="_blank" className="text-white">
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link to={""} target="_blank" className="text-white">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link to={""} target="_blank" className="text-white">
                    <BsYoutube className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Our Blogs</Link>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-md-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}
