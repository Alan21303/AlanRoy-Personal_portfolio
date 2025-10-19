import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getYear() + 1900; // or use getFullYear()

  return (
    <footer className="footer-wrapper" id="contact">
      {/* Let's Connect Section */}
      <div className="connect-section">
        <h2 className="connect-title">Let's Connect</h2>
        <p className="connect-desc">
          Follow my journey, share ideas, or just say hello! I love connecting
          with fellow developers and creatives.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="footer-bar">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
