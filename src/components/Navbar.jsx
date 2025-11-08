import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-6 px-15 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <a href="#home" className="flex items-center">
        <img src={logo} alt="logo" className="h-14 w-auto" />
      </a>

      {/* Menu Links */}
      <div className="flex items-center space-x-6 text-gray-700 font-medium">
        {[
          { name: "Home", to: "#home" },
          { name: "About Us", to: "#about" },
          { name: "Our Services", to: "#services" },
          { name: "Book Now", to: "#book" },
        ].map((link, index, arr) => (
          <React.Fragment key={link.name}>
            <a
              href={link.to}
              className="relative group hover:text-pink-600 transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            {index !== arr.length - 1 && (
              <span className="h-8 w-[1.5px] bg-gray-300 rounded"></span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
