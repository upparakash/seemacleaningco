import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} All Rights Reserved | Seema United Contracting
        </p>

        {/* Center: Email */}
        <p className="footer-text">
          <FaEnvelope className="footer-icon" /> E-Mail: seemaunitedcontracting@gmail.com
        </p>

        {/* Right: Phone */}
        <p className="footer-text">
          <FaPhoneAlt className="footer-icon" /> Phone: +965 66850444 &nbsp; | &nbsp; +965 65050805
        </p>

      </div>
    </footer>
  );
};

export default Footer;
