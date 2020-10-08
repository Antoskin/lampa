import {api} from "../../testApi";

const initialState = {
    data: api || [],
    loading: true,
    error: '',
}

const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'PRODUCT_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'PRODUCT_SUCCESS':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case 'PRODUCT_FAILURE': {
            return {
                ...state,
                data: [],
                loading: false,
            }
        }
        default:
            return state
    }
}

export default productReducer;
