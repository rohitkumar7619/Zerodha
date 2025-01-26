import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row  text-center ">
        <h1>Pricing</h1>
        <p className="text-muted mb-5">
          Free equity investments and flat ₹ 20 traday and F&O trades
        </p>
        <hr />
        <div className="col-4">
          <img src="media/images/pricingEquity.svg " alt="pricingEquity" />
          <h1 className="fs-3">Pricing</h1>
          <p>
            All equity investment (NSE, BSE), are absolutely free - ₹ 0
            brokerage
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" alt="intradayTrades" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg " alt="pricingEquity" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
