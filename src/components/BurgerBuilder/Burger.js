import React from 'react';
import classes from './Burger.css';
import Ingredient from "./Ingredient/Ingredient";

const burger = (props) => {
    const ingredientsToRender = Object.keys(props.ingredients).map((ingredientKey) => {
        return [ ...Array(props.ingredients[ingredientKey]) ]
        .map((_, i)=> {
            return <Ingredient key={ingredientKey + i} type={ingredientKey}/>
        });
    }).reduce((arr, item) => {
        return arr.concat(item);
    }, []);
    return(
        <div className={classes.Burger}>
            <Ingredient type={'bread-top'}/>
            { ingredientsToRender.length > 0
              ? ingredientsToRender
              :  <p>Add ingredients please</p>
            }
            <Ingredient type={'bread-bottom'}/>
        </div>
    );
};
export default burger;