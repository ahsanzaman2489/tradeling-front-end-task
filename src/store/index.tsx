import {applyMiddleware, compose, createStore, StoreEnhancer} from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const middlewares = [reduxThunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancer];

if (process.env.NODE_ENV === 'development') {
    storeEnhancers.push(composeWithDevTools());
}

const composedEnhancers = compose(...storeEnhancers);
export default createStore(rootReducer, {}, composedEnhancers as StoreEnhancer);
