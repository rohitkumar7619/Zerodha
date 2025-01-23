import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Pricingpage from "./landing_page/pricing/PricingPage";
import AboutPage from "./landing_page/about/AboutPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <HomePage />
      <Pricingpage />
      <AboutPage />
    </div>
  </React.StrictMode>
);
