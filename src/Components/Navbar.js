import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCost from "./CartCost";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#3498e1",
        color: "#fff",
        padding: "10px",
      }}
    >
      <span className="logo">Logo Goes Here</span>
      <div style={{ marginRight: "110px", color: "#fff" }}>
        <Link className="navLink" to="/" style={{ color: "#fff" }}>
          Home
        </Link>
        <Link className="navLink" to="/cart" style={{ color: "#fff" }}>
          Cart (<span>{items.length}</span>)
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
