import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Brand from "../Header/Brand";
import Hamburger from "./Hamburger";

import styles from "../Header/Header.module.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header
      className={
        isNavOpen ? `${styles.header} ${styles.navOpen}` : `${styles.header}`
      }
    >
      <Brand />
      <Nav setIsNavOpen={setIsNavOpen} />
      <Hamburger
        isNavOpen={isNavOpen}
        handleNavOpen={handleNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </header>
  );
}

function Nav({ setIsNavOpen }) {
  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={styles.mainNav}>
      <ul className={styles.mainNavList}>
        <li>
          <NavLink
            to='home'
            className={styles.mainNavLink}
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='about'
            className={styles.mainNavLink}
            onClick={handleNavLinkClick}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='clients'
            className={styles.mainNavLink}
            onClick={handleNavLinkClick}
          >
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            to='contact'
            className='mainNavLink'
            onClick={handleNavLinkClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
