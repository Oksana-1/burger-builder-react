import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/BurgerBuilder/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 2,
            cheese: 1,
            bacon: 2
        }
    };
    render() {
       return (
           <Wrapper>
               <Burger ingredients={this.state.ingredients}/>
               <div>Burger build controller</div>
           </Wrapper>
       )
    };
}
export default BurgerBuilder;