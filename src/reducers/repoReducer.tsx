import {REPO_FETCHING, REPO_FETCHED} from '../utils/actionTypes';

const initialState = {
    isLoading: false
}

export default (state = initialState, action: { type: any; payload: any; }) => {
    const {type, payload} = action;
    switch (type) {
        case REPO_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case REPO_FETCHED:
            return {
                ...state,
                ...payload,
                isLoading: false
            }
        default:
            return state
    }
};