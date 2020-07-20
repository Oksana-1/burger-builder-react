import React from 'react';
import classes from './MobileMenu.css';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';

const mobileMenu = () => (
  <nav className={classes.MobileMenu}>
    <div className={classes.MobileMenuLogo}>
      <Logo/>
    </div>
    <NavigationList/>
  </nav>
);
export default mobileMenu;