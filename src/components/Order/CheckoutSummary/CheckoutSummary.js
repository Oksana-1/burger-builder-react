import React from "react";
import Burger from '../../BurgerBuilder/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            <h1>Hope you are glad to see your burger</h1>
            <Burger ingredients={props.ingredients}/>
            <div className={classes.ButtonsRow}>
                <Button btnType="Danger">CANCELL</Button>
                <Button btnType="Success">CONTINUE</Button>
            </div>
        </div>
    )
};
export default checkoutSummary;