import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/BurgerBuilder/Burger';

class BurgerBuilder extends Component {
    render() {
       return (
           <Wrapper>
               <Burger/>
               <div>Burger build controller</div>
           </Wrapper>
       )
    };
}
export default BurgerBuilder;