import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Wrapper from '../Wrapper/Wrapper';
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            }) ;
            axios.interceptors.response.use(
            response => response,
            error => {
                this.setState({error: error});
            });
        }
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render() {
            return (
                <Wrapper>
                    <Modal
                        show={this.state.error}
                        closeModal={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Wrapper>
            );
        }

    }
}
export default withErrorHandler;
