import {applyMiddleware, compose, createStore, StoreEnhancer} from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';


export default function configureStore(initialState: any) {
    const persistConfig = {
        key: 'root',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const middlewares = [reduxThunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    if (process.env.NODE_ENV === 'development') {
        storeEnhancers.push(composeWithDevTools());
    }

    const composedEnhancers = compose(...storeEnhancers);

    const store = createStore(persistedReducer, initialState, composedEnhancers as StoreEnhancer);
    // @ts-ignore
    const persistor = persistStore(store);

    return {store, persistor};
}