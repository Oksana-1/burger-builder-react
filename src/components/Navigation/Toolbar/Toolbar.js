import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
const toolbar = () => (
  <div className={classes.Toolbar}>
    <div>Menu</div>
    <Logo/>
    <nav>
      <NavigationList/>
    </nav>
  </div>
);
export default toolbar;