import axios from 'axios';
import {createAction, handleActions} from 'redux-actions';

const initialState = {
    success: null,
    data: [],
    loading: true,
    error: '',
}

const setOrderRequest = createAction('ORDER_REQUEST');
const setOrderResponse = createAction('ORDER_RESPONSE');
const fetchOrdersResponse = createAction('GET_ORDERS_RESPONSE');
//export const resetOrder = createAction('ORDER_RESET', index => index);

export const setOrder = (data) => dispatch => {
    dispatch(setOrderRequest());
    axios.post('http://localhost:5000/api/orders/add', data, {
        headers: {'Content-Type': 'Application/json'}
    })
        .then(res => dispatch(setOrderResponse(res)))
        .catch(err => dispatch(setOrderResponse(err)))
}

export const fetchOrders = () => dispatch => {
    dispatch(setOrderRequest());
    axios.get('http://localhost:5000/api/orders/list')
        .then(res => dispatch(fetchOrdersResponse(res)))
        .catch(err => dispatch(fetchOrdersResponse(err)))
}

const orderReducer = handleActions( {
    [setOrderRequest]: (state) => ({...state, loading: true}),
    [setOrderResponse]: (state, {payload}) => ({
        ...state,
        success: payload.data && true,
        data: payload.data,
        error: payload.message,
        loading: false
    }),
    [fetchOrdersResponse]: (state, {payload: {data, message}}) => {
        return {
            ...state,
            data: data,
            success: null,
            error: message,
            loading: false,
        }
    },
}, initialState)


export default orderReducer;
