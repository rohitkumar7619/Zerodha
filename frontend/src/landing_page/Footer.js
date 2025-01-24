import React from "react";

function Footer() {
  return (
    <footer style={{ background: "rgb(240, 240, 240)" }}>
      <div className="container border-top mt-5">
        <div className="row">
          {/* Logo Section */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Company Logo"
              style={{ width: "50%" }}
            />
            <br /> <br />
            <br /> <br />
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          {/* Company Section */}
          <div className="col">
            <h3>Company</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  About
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Products
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Pricing
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Careers
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Zerodha.tech
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Open source
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Zerodha Cares (CSR)
                </a>
                <br /> <br />
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col">
            <h3>Support</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Contact us
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Support portal
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Z-Connect blog
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  List of charges
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Downloads & resources
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Videos
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Market overview
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  How to file a complaint?
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Status of your complaints
                </a>
                <br /> <br />
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="col">
            <h3>Account</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Open an account
                </a>
                <br /> <br />
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Fund transfer
                </a>
                <br /> <br />
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div
          className="text-muted mt-2"
          style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking, please
            write to{" "}
            <a
              href="mailto:complaints@zerodha.com"
              style={{ textDecoration: "none" }}
            >
              complaints@zerodha.com
            </a>
            , for DP-related issues, write to{" "}
            <a href="mailto:dp@zerodha.com" style={{ textDecoration: "none" }}>
              dp@zerodha.com
            </a>
            .
          </p>
          <p>
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES:
            <ul>
              <li>Register on the SCORES portal.</li>
              <li>
                Mandatory details for filing complaints on SCORES: Name, PAN,
                Address, Mobile Number, E-mail ID.
              </li>
              <li>
                Benefits: Effective communication, speedy redressal of
                grievances.
              </li>
            </ul>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            <strong>Attention Investors:</strong>
            <ul>
              <li>
                Stock brokers can accept securities as margins from clients only
                by way of pledge in the depository system w.e.f September 01,
                2020.
              </li>
              <li>
                Update your e-mail and phone number with your stock
                broker/depository participant to receive OTP directly from
                depository.
              </li>
              <li>
                Check your securities/MF/bonds in the consolidated account
                statement issued by NSDL/CDSL every month.
              </li>
            </ul>
          </p>

          <p>
            "Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is a one-time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary."
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non-allotment, the funds will remain in
            your bank account.
          </p>
          <p>
            As a business, we don't give stock tips and have not authorized
            anyone to trade on behalf of others. If you find anyone claiming to
            be part of Zerodha and offering such services, please
            <a href="#" style={{ textDecoration: "none" }}>
              create a ticket here
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
