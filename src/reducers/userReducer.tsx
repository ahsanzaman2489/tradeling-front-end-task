export default (state: any, action: { type: any; payload: any; }) => {
    const {type, payload} = action;
    return {
        ...state,
    }
};