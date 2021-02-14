import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import users from './usersReducer';
import repos from './repoReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users', 'repos'],
};

const rootReducer = combineReducers({
    users,
    repos
});

export default persistReducer(persistConfig, rootReducer) as any;
