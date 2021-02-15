import {USER_FETCHING, USER_FETCHED} from '../utils/actionTypes';

const initialState = {
    isLoading: false
}
export default (state = initialState, action: { type: any; payload: any; }) => {
    const {type, payload} = action;
    switch (type) {
        case USER_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case USER_FETCHED:
            return {
                ...state,
                ...payload,
                isLoading: false
            }
        default:
            return state
    }
};