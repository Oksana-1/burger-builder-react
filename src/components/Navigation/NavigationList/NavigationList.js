import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from '../NavigationList/NavigationList.css';
const navigationList = () => (
  <ul className={classes.NavigationList}>
    <NavigationItem link="/" active="true">BurgerBuilder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);
export default navigationList;