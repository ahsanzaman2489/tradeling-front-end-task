import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import users from './userReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users'],
};

const rootReducer = combineReducers({
    users,
});

export default persistReducer(persistConfig, rootReducer) as any;
