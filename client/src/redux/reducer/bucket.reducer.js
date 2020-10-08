const initialState = {
    data: [],
    totalPrice: 0,
    loading: true,
    error: ''
}

const bucketReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'BUCKET_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'BUCKET_SUCCESS':
            return {
                data: payload,
                totalPrice: 1,
                loading: false,
                error: ''
            }
        case 'BUCKET_FAILURE':
            return {
                ...state,
                data: [],
                totalPrice: 0,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default bucketReducer;