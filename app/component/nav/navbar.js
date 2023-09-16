"use client"; // This is a client component 
import React, { useState } from 'react';
import Link from 'next/link';
import './nav.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          {/* <Link href="/">
            <a>
              <img src="/your-logo.png" alt="Logo" className="logo" />
            </a>
          </Link> */}
          <button className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link href="/">
              <div className="navbar-item">Home</div>
            </Link>
            <Link href="/about">
              <div className="navbar-item">About</div>
            </Link>
            <Link href="/services">
              <div className="navbar-item">Services</div>
            </Link>
            <Link href="/portfolio">
              <div className="navbar-item">Portfolio</div>
            </Link>
            <Link href="/contact">
              <div className="navbar-item">Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
