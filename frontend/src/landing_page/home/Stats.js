import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <h1>Trust with confidence</h1>
          <br />
          <br />

          <h4>Customer-first always</h4>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <br />
          <h4>No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <br />
          <h4>The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <br />
          <h4>Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
          <br />
        </div>
        <div className="col-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt=""
            style={{ width: "85%" }}
          />
          <div className="row text-center">
            <div className="col-6">
              <a href="" style={{ textDecoration: "none" }}>
                Explore our products
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-6">
              <a href="" style={{ textDecoration: "none" }}>
                Try Kite demo
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
