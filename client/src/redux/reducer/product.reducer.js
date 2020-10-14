import axios from 'axios';
import {createAction, handleActions} from 'redux-actions';
import {fetchBucketList} from './bucket.reducer';

const initialState = {
    data: [],
    loading: true,
    loaded: false,
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
        .then(() => dispatch(fetchBucketList()))
        .catch(err => dispatch(fetchProductResponse(err)))
}

const productReducer = handleActions( {
    [fetchProductRequest]: (state) => {
        return {
            ...state,
            loading: true,
            loaded: false,
        }
    },
    [fetchProductResponse]: (state, {payload}) => {
        return {
            ...state,
            data: payload.data,
            error: payload.message,
            loading: false,
            loaded: true
        }
    },
}, initialState)


export default productReducer;
