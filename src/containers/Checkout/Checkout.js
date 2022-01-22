import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import axios from "../../api/axios-order";
import { getLocalStorageItem } from "../../utils";
class Checkout extends Component {
    state = {
        ingredients: {},
        busy: true,
        loadIngredientsError: false,
    }
    componentDidMount() {
        axios.get('/orders.json')
          .then(response => {
            const orderId = getLocalStorageItem('orderId');
            const ingredients = response.data[orderId] ? response.data[orderId].ingredients : {} ;
            this.setState({ingredients});
          })
          .catch(() => {
              this.setState({loadIngredientsError: true})
          })
          .finally(() => {
              this.setState({ busy: false })
          });
    }

    render() {
        return (
            <CheckoutSummary ingredients={this.state.ingredients}/>
        )

    }
}
export default Checkout;