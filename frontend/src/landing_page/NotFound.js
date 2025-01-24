import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "0.25rem",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
