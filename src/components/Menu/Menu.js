import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss';

const Menu = () => {
    return (
      <nav className={styles.menu}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  };

export default Menu;