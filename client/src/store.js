import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { reducer } from './scenes/reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



export default createStoreWithMiddleware(reducer);
