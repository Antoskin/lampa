import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {products, bucket, orders} from './reducer';

export default combineReducers({
    products,
    bucket,
    orders,
    form: formReducer
})