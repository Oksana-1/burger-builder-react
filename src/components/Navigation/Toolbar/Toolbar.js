import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
const toolbar = (props) => (
  <div className={classes.Toolbar}>
      <div className={classes.DrawerToggle} onClick={props.mobileMenuOpened}>
          <div></div>
          <div></div>
          <div></div>
      </div>
    <div className={classes.ToolbarLogo}>
      <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationList/>
    </nav>
  </div>
);
export default toolbar;