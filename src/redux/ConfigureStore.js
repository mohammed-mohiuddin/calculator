import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Labels } from './labels';
import {Operations} from './input';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({labels: Labels, operations: Operations}),
        applyMiddleware(thunk, logger)
    );
    return store;
}