import React, { useState } from "react";

import { Link } from "react-router-dom";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, serIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    selectedMenu(index);
  };

  const handleProfileClick = (index) => {
    isProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <link style={{ textDecoration: "nome" }} to="/">
              <p>Dashboard</p>
            </link>
          </li>
          <li>
            <p>Orders</p>
          </li>
          <li>
            <p>Holdings</p>
          </li>
          <li>
            <p>Positions</p>
          </li>
          <li>
            <p>Funds</p>
          </li>
          <li>
            <p>Apps</p>
          </li>
        </ul>
        <hr />
        {/* <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
