import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Read user info stored by frontend before redirecting
    const name = localStorage.getItem("user_name") || "User";
    const email = localStorage.getItem("user_email") || "";
    setUserName(name);
    setUserEmail(email);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    window.location.href = FRONTEND_URL;
  };

  const handleGoToFrontend = () => {
    window.location.href = FRONTEND_URL;
  };

  // Generate initials from name
  const getInitials = (name) => {
    if (!name) return "ZU";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        {/* Profile Section with Dropdown */}
        <div className="profile-wrapper" ref={dropdownRef}>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{getInitials(userName)}</div>
            <p className="username">{userName || "USERID"}</p>
            <span className={`profile-chevron ${isProfileDropdownOpen ? "open" : ""}`}>
              &#8964;
            </span>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              {/* User Info Block */}
              <div className="profile-dropdown-header">
                <div className="profile-dropdown-avatar">{getInitials(userName)}</div>
                <div className="profile-dropdown-info">
                  <span className="profile-dropdown-name">{userName || "User"}</span>
                  {userEmail && (
                    <span className="profile-dropdown-email">{userEmail}</span>
                  )}
                </div>
              </div>

              <div className="profile-dropdown-divider" />

              {/* Go to Zerodha Homepage */}
              <button
                className="profile-dropdown-item"
                onClick={handleGoToFrontend}
              >
                <span className="profile-dropdown-icon">&#127968;</span>
                Go to Zerodha Home
              </button>

              <div className="profile-dropdown-divider" />

              {/* Logout */}
              <button
                className="profile-dropdown-item profile-dropdown-logout"
                onClick={handleLogout}
              >
                <span className="profile-dropdown-icon">&#8594;</span>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
