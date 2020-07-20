import React from 'react';
import classes from './Layout.css';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import MobileMenu from "../Navigation/MobileMenu/MobileMenu";
const layout = ( props ) => (
    <Wrapper>
        <MobileMenu />
        <header>
          <Toolbar/>
        </header>
        <main className={ classes.Content }>
            {props.children}
        </main>
    </Wrapper>
);

export default layout;