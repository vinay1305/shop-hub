import React from "react";

export default function FooterBottom() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Vin.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
