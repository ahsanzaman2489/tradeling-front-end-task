import {REPO_FETCHING, REPO_FETCHED, MORE_REPO_FETCHED} from '../utils/actionTypes';

const initialState = {
    isLoading: false,
    searchTerm: '',
    nodes: [],
    pageInfo: {}
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
        case MORE_REPO_FETCHED:
            return {
                ...state,
                ...payload,
                nodes: [...state.nodes, ...payload.nodes],
                pageInfo: {...state.pageInfo, ...payload.pageInfo},
            }
        default:
            return state
    }
};