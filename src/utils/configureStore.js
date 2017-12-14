import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { initialState } from '../reducers/initialState';

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);