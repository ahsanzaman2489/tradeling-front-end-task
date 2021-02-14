export default (state: {
    isLoading: false
}, action: { type: any; payload: any; }) => {
    const {type, payload} = action;
    switch (type) {
        case 'fetchingUsers':
            return {
                ...state,
                isLoading: true
            }
        case 'UsersFetched':
            return {
                ...state,
                ...payload,
                isLoading: false
            }
        default:
            return {...state}
    }
};