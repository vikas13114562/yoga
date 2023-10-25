"use client"; // This is a client component
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false)
  };
  
  const toggleMenu2 = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image className="lodo-tag" src={"/logo1.png"} alt="logo" width={250} height={50} />
        </Link>
      </div>
      <div
        className={`${styles.menuIcon} ${isMenuOpen ? styles.cross : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ""}`}
       
      >
        <li className={path === "/" ? styles.active : ""} onClick={toggleMenu2}>
          <Link href="/">Home</Link>
        </li>
        <div id={styles.courseId}>
          <div 
            className={styles.courseLink}
            onClick={()=>{
              setIsSubMenuOpen(!isSubMenuOpen)
            }}
          >
          <li className={path === "/courses" ? styles.active : ""}
            
          >
            Courses
          </li>{
            isSubMenuOpen ? <ArrowDropUpIcon />:<ArrowDropDownIcon />
          }</div>
          
          {
            isSubMenuOpen && (
              <div id={styles.subMenuItem}
              
              >
                <li onClick={toggleMenu2}>
                  <Link href="/courses/yin-yoga">Yin Yoga</Link></li>
                <li onClick={toggleMenu2}>
                  <Link href="/courses/prenatal-yoga">Prenatal Yoga</Link></li>
                <li onClick={toggleMenu2}>
                  <Link href="/courses/ashtanga-yoga">Ashtanga Yoga</Link></li>
                <li onClick={toggleMenu2}>
                  <Link href="/courses/hatha-yoga">Hatha Yoga</Link></li>
                <li onClick={toggleMenu2}>
                  <Link href="/courses/nutrition">Nutrition Course</Link></li>
                <li onClick={toggleMenu2}>
                  <Link href="/courses">All Courses</Link></li>
              </div>
            )
          }
        </div>
        <li className={path === "/schedule" ? styles.active : ""} onClick={toggleMenu2}>
          <Link href="/schedule">Class Schedule</Link>
        </li>
        <li className={path === "/blog" ? styles.active : ""} onClick={toggleMenu2}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
