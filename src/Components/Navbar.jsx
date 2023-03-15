import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/about" && <Link to="about">About</Link>}
      {location.pathname !== "/expensive" && (
        <Link to="expensive">Expensive Products</Link>
      )}
      {location.pathname !== "/" && <Link to="/">Home</Link>}
    </div>
  );
};

export default Navbar;
