import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>The QJ Blog</h1>
      <div className="links">
        <a href="">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </div>
  );
};

export default NavBar;
