import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/BurgerBuilder/Burger';
import Controls from '../../components/BurgerBuilder/Controls/Controls';
const INGREDIENTS_PRICES = {
    salad: 0.5,
    meat: 1.5,
    cheese: 0.5,
    bacon:0.7
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4
    };
    addIngredientHandler = (type) => {
        const newAmount = this.state.ingredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        const clonedIngredients = {...this.state.ingredients};
        clonedIngredients[type] = newAmount;
        this.setState({
            ingredients: clonedIngredients,
            totalPrice: newPrice
        });
    };
    removeIngredientHandler = (type) => {
        const newAmount = this.state.ingredients[type] - 1;
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        const clonedIngredients = {...this.state.ingredients};
        clonedIngredients[type] = newAmount;
        this.setState({
            ingredients: clonedIngredients,
            totalPrice: newPrice
        })
    };
    render() {
       return (
           <Wrapper>
               <Burger ingredients={this.state.ingredients}/>
               <Controls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}/>
           </Wrapper>
       )
    };
}
export default BurgerBuilder;