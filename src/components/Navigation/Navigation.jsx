import React, { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down → hide navbar
        setShowNav(false);
      } else {
        // scrolling up → show navbar
        setShowNav(true);
      }

      // Add slight blur/shadow after scrolling a bit
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`nav-header ${isScrolled ? "scrolled" : ""} ${
        showNav ? "visible" : "hidden"
      }`}
    >
      <nav className="nav-container">
        {/* Desktop Navigation */}
        <ul className="nav-links">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Burger Icon for Mobile */}
        <div
          className={`burger ${isOpen ? "toggle" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        {/* Fullscreen Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
