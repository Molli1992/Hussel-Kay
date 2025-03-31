import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-menu">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/?lang=es"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default footer;
