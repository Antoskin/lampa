import axios from 'axios';
import {createAction, handleActions} from 'redux-actions';

const initialState = {
    ids: [],
    data: [],
    totalAmount: 0,
    error: ''
}

export const setProductToCard = createAction('SET_INDEX', index => index);
const requestChosenRequest = createAction('REQUEST_CHOSEN_PRODUCTS');
export const fetchChosenResponse = createAction('FETCH_CHOSEN_PRODUCTS');

export const fetchProducts = (ids) => dispatch => {
    dispatch(requestChosenRequest());
    axios.post('http://localhost:5000/api/product/bucket',
        {ids},
        {
            headers: {
                'Content-Type': 'application/json',
                'cors': 'no-cors'
            }
        })
        .then(res => dispatch(fetchChosenResponse(res)))
        .catch(err => dispatch(fetchChosenResponse(err)))
}

const bucketReducer = handleActions({
    [setProductToCard]: (state, {payload: {id, amount}}) => {
        const isNotExists = !state.ids.includes(id);

        return {
            ...state,
            ids: isNotExists ? [...state.ids, id]: state.ids,
            totalAmount: isNotExists ? state.totalAmount + amount : state.totalAmount
        }
    },
    [fetchChosenResponse]: (state, {payload}) => {
        return {
            ...state,
            data: payload.data,
            error: payload.message
        }
    }
}, initialState)


export default bucketReducer;