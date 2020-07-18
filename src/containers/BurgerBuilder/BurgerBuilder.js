import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/BurgerBuilder/Burger';
import Controls from '../../components/BurgerBuilder/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/BurgerBuilder/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };
    checkIfPurchasable = (ingredients) => {
        const ingredientsSum = Object.keys(ingredients).reduce((total, ingredient) => {
            return total + ingredients[ingredient];
        }, 0);
        this.setState({ purchasable: ingredientsSum > 0 });
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
        this.checkIfPurchasable(clonedIngredients);
    };
    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <=0) return;
        const newAmount = this.state.ingredients[type] - 1;
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        const clonedIngredients = {...this.state.ingredients};
        clonedIngredients[type] = newAmount;
        this.setState({
            ingredients: clonedIngredients,
            totalPrice: newPrice
        });
        this.checkIfPurchasable(clonedIngredients);
    };
    purchasingHandler = () => {
        this.setState({purchasing: true});
    };
    purchasingCancelHandler = () => {
        this.setState({purchasing: false});
    }
    render() {
        const disabledRemoveInfo = { ...this.state.ingredients };
        for (let key in disabledRemoveInfo) {
            disabledRemoveInfo[key] = disabledRemoveInfo[key] === 0;
        }
        return (
           <Wrapper>
               <Burger ingredients={this.state.ingredients}/>
               <Controls
                    price={this.state.totalPrice}
                    orderBtnAvailable={this.state.purchasable}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    removeDisabled={disabledRemoveInfo}
                    ordered={this.purchasingHandler}
               />
               <Modal
                    show={this.state.purchasing}
                    closeModal={this.purchasingCancelHandler}>
                    <OrderSummary
                      ingredients={this.state.ingredients}
                      price={this.state.totalPrice}
                      closeModal={this.purchasingCancelHandler}/>
               </Modal>
           </Wrapper>
        )
    };
}
export default BurgerBuilder;