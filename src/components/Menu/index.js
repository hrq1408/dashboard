import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        {isMenuVisible ? 'Esconder' : 'Mostrar '}
      </button>
      <nav className={`${styles.menu} ${isMenuVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.logoimg}>
          <a href="/">
            <img src="https://via.placeholder.com/150" alt="logo" />
          </a>
        </div>
        <div className={styles.container}>
          <img className={styles.image} src="https://www.svgrepo.com/show/72341/dashboard.svg" alt="Dashboard" />
          <p className={styles.text}>Dashboard</p>
        </div>
        <ul>
          <li><NavLink to="/" exact activeClassName={styles.active}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName={styles.active}>About</NavLink></li>
          <li><NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
