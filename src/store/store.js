import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import posts from '../reducers/postReducer';

export default createStore(
    combineReducers({ posts }),
    {},
    applyMiddleware(thunk)
);