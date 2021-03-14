import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import reducer from '../Reducer/mainReducer';

let store = createStore(reducer,applyMiddleware(promiseMiddleware,logger))

export default store;