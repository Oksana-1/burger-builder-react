import axios from 'axios';
const orderInstance = axios.create({
    baseURL: 'https://react-study-7811e.firebaseio.com/'
});
export default orderInstance;