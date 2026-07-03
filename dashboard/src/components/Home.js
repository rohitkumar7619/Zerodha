import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const FRONTEND_URL = "http://localhost:3000";
const API_URL = "http://localhost:3002/api/auth";

const Home = () => {
  const [authState, setAuthState] = useState("loading"); // "loading" | "authenticated" | "unauthenticated"

  useEffect(() => {
    const validateToken = async () => {
      // Check if token was passed via URL query param (from frontend app)
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");
      if (urlToken) {
        localStorage.setItem("token", urlToken);
        // Clean the token from the URL without triggering a reload
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      const token = localStorage.getItem("token");
      if (!token) {
        setAuthState("unauthenticated");
        return;
      }

      try {
        const res = await fetch(`${API_URL}/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) {
          setAuthState("authenticated");
        } else {
          localStorage.removeItem("token");
          setAuthState("unauthenticated");
        }
      } catch {
        // Backend might be down; if token exists, still try to show dashboard
        // but if it clearly failed, redirect to login
        localStorage.removeItem("token");
        setAuthState("unauthenticated");
      }
    };

    validateToken();
  }, []);

  if (authState === "loading") {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Verifying session...</p>
      </div>
    );
  }

  if (authState === "unauthenticated") {
    window.location.href = `${FRONTEND_URL}/login`;
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

const styles = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "1rem",
    backgroundColor: "#f7fafc",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #e2e8f0",
    borderTop: "4px solid #3182ce",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    color: "#4a5568",
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "sans-serif",
  },
};

export default Home;

