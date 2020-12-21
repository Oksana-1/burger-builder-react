import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
class Checkout extends Component {
    state = {
        ingredients: {}
    }

    render() {
        return (
            <CheckoutSummary ingredients={this.state.ingredients}/>
        )

    }
}
export default Checkout;