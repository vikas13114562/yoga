"use client"; // This is a client component
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function getChColor(str) {
    let color = [
      "#C70039",
      "#EE9322",
      "#F4E869",
      "#E55604",
      "#D80032",
      "#FF3FA4",
      "#337CCF",
    ];
    let chArr = str.split("").map((ch, ind) => {
      return {
        ch: ch,
        color: color[ind],
      };
    });

    return chArr;
  }

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
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ""}`}>
        <li className={path === "/" ? styles.active : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={path === "/courses" ? styles.active : ""}>
          <Link href="/courses">Courses</Link>
        </li>
        <li className={path === "/schedule" ? styles.active : ""}>
          <Link href="/schedule">Class Schedule</Link>
        </li>
        <li className={path === "/blog" ? styles.active : ""}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
