import axios from 'axios';
import {createAction, handleActions} from 'redux-actions';

const initialState = {
    data: [],
    totalAmount: 0,
    error: '',
    loading: false,
}

//ACTIONS
const requestBucket = createAction('BUCKET_REQUEST');
const fetchBucketResponse = createAction('BUCKET_LIST_RESPONSE');
const responseSetBucket = createAction('RESPONSE_SET_BUCKET');
const removeProductResponse = createAction('REMOVE_PRODUCT_FROM_BUCKET');

export const setBucketHandle = (id, count = 1) => dispatch => {
    dispatch(requestBucket());
    axios.post('http://localhost:5000/api/bucket/add', {id, count}, {
        headers: {'Content-Type': 'application/json'}
    })
        .then(res => dispatch(responseSetBucket(res)))
        .catch(err => dispatch(responseSetBucket(err)))
}

export const fetchBucket = () => dispatch => {
    dispatch(requestBucket());
    axios.get('http://localhost:5000/api/bucket/list', {
        headers: {'Content-Type': 'Application/json'}
    })
        .then(res => dispatch(fetchBucketResponse(res)))
        .catch(err => dispatch(fetchBucketResponse(err)))
}

export const removeProduct = (id) => dispatch => {
    dispatch(requestBucket());
    console.log('id', id);
    axios.delete(`http://localhost:5000/api/bucket/delete/${id}`, {
        headers: {'Content-Type': 'Application/json'}
    })
        .then(res => dispatch(removeProductResponse(res)))
        .catch(err => dispatch(removeProductResponse(err)))
}

//REDUCER
const bucketReducer = handleActions({
    [requestBucket]: state => ({...state, loading: true}),
    [responseSetBucket]: (state, {payload}) => ({
        ...state,
        loading: false,
        error: payload.message
    }),
    [fetchBucketResponse]: (state, {payload}) => ({
        ...state,
        data: payload.data,
        error: payload.message,
        loading: false,
    }),
    [removeProductResponse]: (state, {payload}) => ({
        ...state,
        data: payload.data || [],
        error: payload.message,
        loading: false
    })
}, initialState)


export default bucketReducer;