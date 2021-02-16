import {USER_FETCHING, USER_FETCHED, MORE_USER_FETCHED} from '../utils/actionTypes';

const initialState = {
    isLoading: false,
    searchTerm: '',
    nodes: [],
    pageInfo: {}
}
const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
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
        case MORE_USER_FETCHED:
            return {
                ...state,
                ...payload,
                nodes: [...state.nodes, ...payload.nodes],
                pageInfo: {...state.pageInfo, ...payload.pageInfo}
            }
        default:
            return state
    }
};

export default userReducer;