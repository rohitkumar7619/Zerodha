import React from "react";

function Hero() {
  return (
    <section className="container-fluid mt-5" id="support-page">
      <div className="p-3 mt-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="#">Track Tickets</a>
      </div>
      <div className="row p-3">
        {/* Left Column */}
        <div className="col-6 p-3">
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how to activate F&O, why is my order getting rejected"
          />
          <div className="mt-4">
            <a href="#" className="help-link">
              Track account opening
            </a>
            <a href="#" className="help-link">
              Track segment activation
            </a>
            <a href="#" className="help-link">
              Intraday margins
            </a>
            <a href="#" className="help-link">
              Kite user manual
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div className="col-6 p-3">
          <h1 className="fs-4 mb-4">Featured</h1>
          <ol className="featured-list">
            <li>
              <a href="#">Current Takeovers and Delisting - January 2025</a>
            </li>
            <li>
              <a href="#">Rights Entitlements listing in January 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
