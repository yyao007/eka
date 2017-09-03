import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { reducer as FormReducer } from './scenes/reducer';
import { reducer as UserReducer } from './data/user/reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const reducer = combineReducers({
    user: UserReducer,
    form: FormReducer,
})

export default createStoreWithMiddleware(reducer);
