import axios from 'axios';
import {createAction, handleActions} from 'redux-actions';

const initialState = {
    data: [],
    loading: true,
    error: '',
}

const fetchProductRequest = createAction('PRODUCT_REQUEST');
const fetchProductResponse = createAction('PRODUCT_RESPONSE');

export const fetchProducts = () => dispatch => {
    dispatch(fetchProductRequest());
    axios.get('http://localhost:5000/api/product/list', {
        headers: {'Content-Type': 'Application/json'}
    })
        .then(res => dispatch(fetchProductResponse(res)))
        .catch(err => dispatch(fetchProductResponse(err)))
}

const productReducer = handleActions( {
    [fetchProductRequest]: (state) => {
        return {
            ...state,
            loading: true
        }
    },
    [fetchProductResponse]: (state, {payload}) => {
        return {
            ...state,
            data: payload.data,
            error: payload.message,
            loading: false
        }
    },
}, initialState)


export default productReducer;
