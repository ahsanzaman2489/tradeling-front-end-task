import {Service} from "../Services";
import {searchUserQuery, searchRepoQuery} from "../Services/queries";
import {REPO_FETCHED, USER_FETCHED} from "../utils/actionTypes";

export const searchUsers = async (searchText: any, dispatch: any) => {
    try {
        const response: any = await Service(searchText, searchUserQuery, 'users')
        if (response.search && response.search?.nodes?.length) {
            dispatch({
                type: USER_FETCHED,
                payload: {
                    searchText,
                    ...response.search
                }
            })
        }
    } catch (e) {
        console.log(e)
    }

}

export const searchRepo = async (searchText: any, dispatch: any) => {
    try {
        const response: any = await Service(searchText, searchRepoQuery, 'repos')
        if (response.search && response.search?.nodes?.length) {
            dispatch({
                type: REPO_FETCHED,
                payload: {
                    searchText,
                    ...response.search
                }
            })
        }
    } catch (e) {
        console.log(e)
    }

}
