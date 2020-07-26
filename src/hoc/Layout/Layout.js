import React, {Component} from 'react';
import classes from './Layout.css';
import Wrapper from '../Wrapper/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import MobileMenu from "../../components/Navigation/MobileMenu/MobileMenu";
class Layout extends Component {
    state = {
        mobileMenuIsOpen: false
    };
    mobileMenuCloseHandler = () => {
        this.setState({ mobileMenuIsOpen: false });
    };
    mobileMenuOpenHandler = () => {
        this.setState({ mobileMenuIsOpen: true });
    };
    render() {
        return (
            <Wrapper>
                <MobileMenu
                    mobileMenuIsOpen={this.state.mobileMenuIsOpen}
                    mobileMenuClosed={this.mobileMenuCloseHandler}/>
                <header>
                    <Toolbar
                        mobileMenuOpened={this.mobileMenuOpenHandler}/>
                </header>
                <main className={ classes.Content }>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
}

export default Layout;