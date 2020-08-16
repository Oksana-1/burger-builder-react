import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Wrapper from '../Wrapper/Wrapper';
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            }) ;
            this.responseInterceptor = axios.interceptors.response.use(
            response => response,
            error => {
                this.setState({error: error});
            });
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
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
