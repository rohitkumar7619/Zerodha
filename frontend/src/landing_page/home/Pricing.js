import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-5">
          <h1>Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>
        </div>
        <div className="col-7 mb-5"></div>
      </div>
    </div>
  );
}

export default Pricing;
