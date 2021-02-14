export default (state: {
    isLoading: false
}, action: { type: any; payload: any; }) => {
    const {type, payload} = action;
    switch (type) {
        case 'fetchingRepos':
            return {
                ...state,
                isLoading: true
            }
        case 'reposFetched':
            return {
                ...state,
                ...payload,
                isLoading: false
            }
        default:
            return {...state}
    }
};