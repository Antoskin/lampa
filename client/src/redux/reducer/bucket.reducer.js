import axios from 'axios';
import {createAction, handleActions} from 'redux-actions';
import {getTotal} from '../../utils';
import {resetOrder} from './orders.reducer';

const initialState = {
    data: [],
    totalAmount: 0,
    loading: false,
    loaded: false,
    error: '',
}

//ACTIONS
const requestBucket = createAction('BUCKET_REQUEST');
const fetchBucketResponse = createAction('BUCKET_LIST_RESPONSE');
const responseSetBucket = createAction('RESPONSE_SET_BUCKET');
const removeProductResponse = createAction('REMOVE_PRODUCT_FROM_BUCKET');

export const fetchBucketList = () => dispatch => {
    dispatch(requestBucket());
    axios.get('http://localhost:5000/api/bucket/list')
        .then(res => dispatch(fetchBucketResponse(res)))
        .catch(err => dispatch(fetchBucketResponse(err)))
}

export const addToBucket = id => dispatch => {
    dispatch(requestBucket());
    axios.post('http://localhost:5000/api/bucket/add', {id})
        .then(res => dispatch(responseSetBucket(res)))
        .catch(err => dispatch(responseSetBucket(err)))
}

export const removeFromBucket = ({id, type = ''}) => dispatch => {
    dispatch(requestBucket());
    axios.post(`http://localhost:5000/api/bucket/delete`, {id, type})
        .then(res => dispatch(removeProductResponse(res)))
        .then(() => type === 'all' && dispatch(resetOrder()))
        .catch(err => dispatch(removeProductResponse(err)))
}

//REDUCER
const bucketReducer = handleActions({
    [requestBucket]: state => ({...state, loading: true, loaded: false}),
    [responseSetBucket]: (state, {payload: {data, message}}) => {
        return {
            ...state,
            data: data,
            totalAmount: getTotal(data),
            error: message,
            loading: false,
        }
    },
    [fetchBucketResponse]: (state, {payload: {data, message}}) => ({
        ...state,
        data: data,
        totalAmount: getTotal(data),
        error: message,
        loading: false,
        loaded: true
    }),
    [removeProductResponse]: (state, {payload: {data, message}}) => ({
        ...state,
        data: data,
        totalAmount: getTotal(data),
        error: message,
        loading: false,
        loaded: true
    })
}, initialState)


export default bucketReducer;