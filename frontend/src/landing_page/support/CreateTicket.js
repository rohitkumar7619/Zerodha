import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-muted p-5 fs-3">
          To create a ticket, select a relevant topic
        </h2>

        {/* Account Opening Section */}
        <div className="col-4">
          <h1 className="fs-3">Account Opening</h1>
          <form className="p-3">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/getting-started"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Getting Started
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/online"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Online
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/offline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Offline
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/charges"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Charges
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/company-partnership-huf"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Company, Partnership, and HUF
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/nri"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Non-Resident Indian (NRI)
                </Link>
              </li>
            </ul>
          </form>
        </div>

        {/* Your Zerodha Account Section */}
        <div className="col-4">
          <h1 className="fs-3">Your Zerodha Account</h1>
          <form className="p-3">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/getting-started"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login credentials
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/online"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Your Profile
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/offline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Account modification and segment addition
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/charges"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  CMR & DP ID
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/company-partnership-huf"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Nomination
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/nri"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Transfer and conversion of shares
                </Link>
              </li>
            </ul>
          </form>
        </div>

        {/* Trading and Markets Section */}
        <div className="col-4">
          <h1 className="fs-3">Trading and Markets</h1>
          <form className="p-3">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/getting-started"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Trading FAQs
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/online"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Kite
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/offline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Margins
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/company-partnership-huf"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Product and order types
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/nri"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Corporate actions
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Kite features
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        {/* Account Opening Section */}
        <div className="col-4">
          <h1 className="fs-3"> Funds</h1>
          <form className="p-3">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/getting-started"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Fund withdrawal
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/online"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Adding funds
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/offline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Adding bank accounts
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/charges"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  eMandates
                </Link>
              </li>
            </ul>
          </form>
        </div>

        {/* Your Zerodha Account Section */}
        <div className="col-4">
          <h1 className="fs-3">Console</h1>
          <form className="p-3">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/getting-started"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  IPO
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/online"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Portfolio
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/offline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Funds statement
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/charges"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Profile
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/company-partnership-huf"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Reports
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/nri"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Referral program
                </Link>
              </li>
            </ul>
          </form>
        </div>

        {/* Trading and Markets Section */}
        <div className="col-4">
          <h1 className="fs-3">Coin</h1>
          <form className="p-3">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/getting-started"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Understanding mutual funds and Coin
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/online"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Coin app
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/offline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Coin web
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/company-partnership-huf"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Transactions and reports
                </Link>
              </li>
              <li style={{ margin: "5px 0" }}>
                <Link
                  to="/nri"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  National Pension Scheme (NPS)
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
