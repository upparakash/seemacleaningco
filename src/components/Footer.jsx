import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} All Rights Reserved | Karm Cleaning Services Kuwait
        </p>

        {/* Center: Email */}
        <p className="footer-text">
          <FaEnvelope className="footer-icon" /> E-Mail: karmcleaningservice@gmail.com
        </p>

        {/* Right: Phone */}
        <p className="footer-text">
          <FaPhoneAlt className="footer-icon" /> Phone: +965 55396880 &nbsp; | &nbsp; +965 50449213 &nbsp; | &nbsp; +965 60446934
        </p>

      </div>
    </footer>
  );
};

export default Footer;
