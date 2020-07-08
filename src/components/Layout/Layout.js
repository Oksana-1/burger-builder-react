import React from 'react';
import classes from './Layout.css';
import Wrapper from '../../hoc/Wrapper';
const layout = ( props ) => (
    <Wrapper>
        <div>Toolbar, Drawer, BackDrop</div>
        <main className={ classes.Content }>
            {props.children}
        </main>
    </Wrapper>
);

export default layout;