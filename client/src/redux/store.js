import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {products, bucket} from './reducer';

export default combineReducers({
    products,
    bucket,
    form: formReducer
})