import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Wrapper>
        <div className={classes.Modal}
             style={{
               transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
               opacity: this.props.show ? '1': '0'
             }}>
          { this.props.children }
        </div>
        <Backdrop show={this.props.show} clicked={this.props.closeModal}/>
      </Wrapper>
    )
  }
}
export default Modal;