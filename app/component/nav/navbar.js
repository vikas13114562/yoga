"use client"; // This is a client component 

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
         
            <img src="logo1.png" alt="Company Logo" />
            
          
        </Link>
        <div className={styles.companyName}>Sarvyog</div>
      </div>
      <div className={`${styles.menuIcon} ${isMenuOpen ? styles.cross : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/courses">
          Courses 
          </Link>
        </li>
        <li>
          <Link href="/schedule">
          Class Schedule
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

