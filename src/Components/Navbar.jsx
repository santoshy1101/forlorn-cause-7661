import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/products/mens">MenProducts</Link>
      <Link to="/products/womens">WomenProducts</Link>
      <Link to="/products/cart">Cart</Link>
    </div>
  );
};

export default Navbar;
