import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientName => {
      return (
        <li key={ingredientName}>
          <span style={{textTransform: 'capitalize'}}>{ingredientName}: </span>
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
      <p>Total price: <b>{props.price.toFixed(2)}</b></p>
      <p>Do you want to continue checkout?</p>
      <Button btnType={'Danger'} clicked={props.closeModal}>CANCEL</Button>
      <Button btnType={'Success'} clicked={props.closeModal}>CONTINUE</Button>
    </Wrapper>
    );
};
export default orderSummary;