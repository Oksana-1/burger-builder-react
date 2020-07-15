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
        {
            controlsArray.map(item => (
                <Control key={item.label} label={item.label}/>
            ))
        }
    </div>
);
export default controls;