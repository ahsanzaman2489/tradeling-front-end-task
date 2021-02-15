import {combineReducers} from 'redux';
import users from './usersReducer';
import repos from './repoReducer';


const rootReducer = combineReducers({
    users,
    repos,
});

export default rootReducer;