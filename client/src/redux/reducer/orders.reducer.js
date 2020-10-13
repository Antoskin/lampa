import axios from 'axios';
import {createAction, handleActions} from 'redux-actions';

const initialState = {
    data: [],
    loading: true,
    error: '',
}

const setOrderRequest = createAction('ORDER_REQUEST');
const setOrderResponse = createAction('ORDER_RESPONSE');

export const setOrder = (data) => dispatch => {
    dispatch(setOrderRequest());
    axios.post('http://localhost:5000/api/orders/add', data, {
        headers: {'Content-Type': 'Application/json'}
    })
        .then(res => dispatch(setOrderResponse(res)))
        .catch(err => dispatch(setOrderResponse(err)))
}

const orderReducer = handleActions( {
    [setOrderRequest]: (state) => {
        return {
            ...state,
            loading: true
        }
    },
    [setOrderResponse]: (state, {payload}) => {
        return {
            ...state,
            data: payload.data,
            error: payload.message,
            loading: false
        }
    },
}, initialState)


export default orderReducer;
