import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-6 px-15 flex justify-between items-center">
      {/* Left: Logo */}
      <NavLink to="/" className="flex items-center">
        <img src={logo} alt="logo" className="h-14 w-auto" />
      </NavLink>

      {/* Right: Nav Links */}
      <div className="flex items-center space-x-6 text-gray-700 font-medium">
        {[
          { name: "Home", path: "/home" },
          { name: "About Us", path: "/about" },
          { name: "Our Services", path: "/our-services" },
          { name: "Book Now", path: "/book-now" },
        ].map((link, index, arr) => (
          <React.Fragment key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `relative group transition ${
                  isActive ? "text-pink-600" : "hover:text-pink-600"
                }`
              }
            >
              {link.name}
              {/* Pink underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            {/* Vertical Divider (except last one) */}
            {index !== arr.length - 1 && (
              <span className="h-8 w-[1.5px] bg-gray-300 rounded"></span> // ✅ taller + slightly thicker + smooth edge
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
