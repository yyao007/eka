import { SAVE_FORM, LOGIN } from './api';
import {combineReducers} from 'redux';

export const reducer = (state=null, action) => {
    switch (action.type) {
        case LOGIN:

        case SAVE_FORM:
        default:
            return state;
    }
};
