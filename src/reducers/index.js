import { combineReducers } from 'redux';
import denemeReducer from './deneme-reducer';

export default combineReducers({
    denemeResponse : denemeReducer,
});
