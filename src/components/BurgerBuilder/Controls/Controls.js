import React from 'react';
import classes from './Controls.css';
import Control from './Control/Control';

const controlsArray = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
];
const controls = (props) => (
    <div className={classes.Controls}>
        <p>Current price: <b>{props.price.toFixed(2)}</b></p>
        {
            controlsArray.map(item => (
                <Control
                    key={item.label}
                    label={item.label}
                    added={() => props.ingredientAdded(item.type)}
                    removed={() => props.ingredientRemoved(item.type)}
                    disable={props.removeDisabled[item.type]}
                />
            ))
        }
        <button className={classes.OrderButton} disabled={!props.orderBtnAvailable}>Order now</button>
    </div>
);
export default controls;