import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const dropdownRef = useRef(null);

  // Decode JWT token to get user info
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUserInfo(payload);
      }
    } catch (e) {
      // Token invalid or absent
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const frontendUrl = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

  const handleGoToLandingPage = () => {
    window.location.href = frontendUrl;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = `${frontendUrl}/login`;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Build avatar initials and display name
  const displayName = userInfo?.username || userInfo?.email || "User";
  const avatarText = displayName.slice(0, 2).toUpperCase();

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

        {/* Profile with dropdown */}
        <div className="profile-wrapper" ref={dropdownRef}>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{avatarText}</div>
            <p className="username">{displayName}</p>
            <span className="dropdown-caret">{isProfileDropdownOpen ? "▲" : "▼"}</span>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              {/* User Info Header */}
              <div className="dropdown-user-info">
                <div className="dropdown-avatar">{avatarText}</div>
                <div className="dropdown-user-details">
                  <p className="dropdown-name">{userInfo?.username || "User"}</p>
                  <p className="dropdown-email">{userInfo?.email || ""}</p>
                </div>
              </div>

              <div className="dropdown-divider" />

              {/* User ID / Account Info */}
              {userInfo?.id && (
                <div className="dropdown-item dropdown-info-row">
                  <span className="dropdown-label">Account ID</span>
                  <span className="dropdown-value">{String(userInfo.id).slice(0, 8)}…</span>
                </div>
              )}

              <div className="dropdown-divider" />

              {/* Actions */}
              <button
                className="dropdown-item dropdown-action"
                onClick={handleGoToLandingPage}
              >
                🏠 Go to Landing Page
              </button>
              <button
                className="dropdown-item dropdown-action dropdown-logout"
                onClick={handleLogout}
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
