import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientName => {
      return (
        <li key={ingredientName}>
          <span style={{textTransform: 'capitilize'}}>{ingredientName}:</span>
          {props.ingredients[ingredientName]}
        </li>
      )
    });
  return (
    <Wrapper>
      <h3>Your order summary:</h3>
      <p>Delicious burger with:</p>
      <ul>
        { ingredientSummary }
      </ul>
    </Wrapper>
    );
};
export default orderSummary;