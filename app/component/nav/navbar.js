"use client"; // This is a client component 

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  ;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function getChColor(str) {
    let color = ["#C70039","#EE9322","#F4E869","#E55604","#D80032","#FF3FA4","#337CCF"]
    let chArr = str.split('').map((ch,ind)=>{
      return {
        ch:ch,
        color:color[ind]
      }
    })

    return chArr;

    
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
         
            <img src="logo1.png" alt="Company Logo" />
            
          
        </Link>
        <div className={styles.companyName}>
          {
            getChColor("SARVYOG").map((ele,ind)=>(
              <span key={ind} style={{color:ele.color,marginRight:'1.5px'}}>{ele.ch}</span>
            ))
          }
        </div>
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

