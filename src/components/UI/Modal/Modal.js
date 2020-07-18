import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper';
const modal = (props) => (
  <Wrapper>
    <div className={classes.Modal}
         style={{
           transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
           opacity: props.show ? '1': '0'
         }}>
      { props.children }
    </div>
    <Backdrop show={props.show} clicked={props.closeModal}/>
  </Wrapper>
);
export default modal;