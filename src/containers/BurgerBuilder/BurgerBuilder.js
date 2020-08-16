import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../components/BurgerBuilder/Burger';
import Controls from '../../components/BurgerBuilder/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/BurgerBuilder/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENTS_PRICES = {
    salad: 0.5,
    meat: 1.5,
    cheese: 0.5,
    bacon:0.7
};
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        busy: true,
        loadIngredientsError: false
    };
    componentDidMount() {
        axios.get('/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data});
        })
        .catch(() => {
            this.setState({loadIngredientsError: true})
        })
        .finally(() => {
            this.setState({busy: false})
        });
    }
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
    };
    purchasingContinueHandler = () => {
        this.setState({busy: true});
        const order = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'Oksana',
                address: {
                    street: 'Teststreet 1',
                    city: 'Kyiv',
                    country: 'Ukraine'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
               this.setState({busy: false, purchasing: false});
            })
            .catch(e => {
                this.setState({busy: false, purchasing: false});
            });
    };
    render() {
        const disabledRemoveInfo = { ...this.state.ingredients };
        for (let key in disabledRemoveInfo) {
            disabledRemoveInfo[key] = disabledRemoveInfo[key] === 0;
        }
        let burger = (
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
            </Wrapper>
        );
        let orderSummary = null;
        if (this.state.ingredients) {
            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    closeModal={this.purchasingCancelHandler}
                    orderBurger={this.purchasingContinueHandler}/>
            );
        }
        if (!this.state.ingredients) {
            burger = this.state.loadIngredientsError
                ? <p>Can't get ingredients!</p>
                : (<Spinner/>) ;
        }
        if (this.state.busy) { orderSummary = (<Spinner/>); }
        return (
           <Wrapper>
               { burger }
               <Modal
                    show={this.state.purchasing}
                    closeModal={this.purchasingCancelHandler}>
                   {orderSummary}
               </Modal>
           </Wrapper>
        )
    };
}
export default withErrorHandler(BurgerBuilder, axios);