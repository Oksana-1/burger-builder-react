import React from 'react';
import classes from './MobileMenu.css';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';

const mobileMenu = (props) =>{
    const menuOpenClass = props.mobileMenuIsOpen ? classes.Open : classes.Close;
    return (
        <Wrapper>
            <Backdrop show={props.mobileMenuIsOpen} clicked={props.mobileMenuClosed}/>
            <nav className={ [classes.MobileMenu, menuOpenClass].join(' ') }>
                <div className={classes.MobileMenuLogo}>
                    <Logo/>
                </div>
                <NavigationList/>
            </nav>
        </Wrapper>
    );
};
export default mobileMenu;