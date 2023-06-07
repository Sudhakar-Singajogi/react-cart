import React from "react";
import { Link } from "react-router-dom";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <h3>Categories</h3>
      <ul>
        <li>
          <Link path="" to="/">
            Home
          </Link>
          <Link path="" to="/category/electronics">
            Electronics
          </Link>
          <Link path="" to="/category/jewelery">
            Jewelery
          </Link>
          <Link path="" to="/category/men's-clothing">
            Mens Clothing
          </Link>
          <Link path="" to="/category/women's-clothing">
            Women Clothing
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
