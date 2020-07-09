import React from 'react';
import classes from './Burger.css';
import Ingredient from "./Ingredient/Ingredient";

const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <Ingredient type={'bread-top'}/>
            <Ingredient type={'salad'}/>
            <Ingredient type={'meat'}/>
            <Ingredient type={'bacon'}/>
            <Ingredient type={'cheese'}/>
            <Ingredient type={'bread-bottom'}/>
        </div>
    );
};
export default burger;