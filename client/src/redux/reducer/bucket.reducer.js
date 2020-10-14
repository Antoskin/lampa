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


export const fetchBucketList = () => dispatch => {
    dispatch(requestBucket());
    axios.get('http://localhost:5000/api/bucket/list')
        .then(res => dispatch(fetchBucketResponse(res)))
        .catch(err => dispatch(fetchBucketResponse(err)))
}

export const addToBucket = (id) => dispatch => {
    dispatch(requestBucket());
    axios.post('http://localhost:5000/api/bucket/add', {id})
        .then(res => dispatch(responseSetBucket(res)))
        .then(() => dispatch(fetchBucketList()))
        .catch(err => dispatch(responseSetBucket(err)))
}

export const removeFromBucket = (id) => dispatch => {
    dispatch(requestBucket());
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
    [fetchBucketResponse]: (state, {payload}) => {
        const total = payload.data.reduce((acc, cur) =>
            acc + (cur.amount * cur.count)
            , 0);

        return {
            ...state,
            data: payload.data,
            error: payload.message,
            totalAmount: total,
            loading: false,
        }
    },
    [removeProductResponse]: (state, {payload}) => ({
        ...state,
        data: payload.data || [],
        error: payload.message,
        loading: false
    })
}, initialState)


export default bucketReducer;