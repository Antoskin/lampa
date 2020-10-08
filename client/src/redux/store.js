import {combineReducers} from 'redux';
import {products, bucket} from './reducer';

export default combineReducers({
    products,
    bucket
})