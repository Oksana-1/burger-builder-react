import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
const toolbar = () => (
  <div className={classes.Toolbar}>
    <div>Menu</div>
    <div className={classes.ToolbarLogo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationList/>
    </nav>
  </div>
);
export default toolbar;