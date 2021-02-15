import {Service} from "../Services";
import {searchUserQuery, searchRepoQuery, loadMoreUserQuery, loadMoreRepoQuery} from "../Services/queries";
import {REPO_FETCHED, USER_FETCHED, MORE_USER_FETCHED, MORE_REPO_FETCHED} from "../utils/actionTypes";

export const searchUsers = async (searchTerm: any, dispatch: any) => {
    try {
        const response: any = await Service({
            searchString: searchTerm
        }, searchUserQuery, 'users')
        if (response.search && response.search?.nodes?.length) {
            dispatch({
                type: USER_FETCHED,
                payload: {
                    searchTerm,
                    ...response.search
                }
            })
        }
    } catch (e) {
        console.log(e)
    }

}

export const searchRepo = async (searchTerm: any, dispatch: any) => {
    try {
        const response: any = await Service({
            searchString: searchTerm
        }, searchRepoQuery, 'repos')
        if (response.search && response.search?.nodes?.length) {
            dispatch({
                type: REPO_FETCHED,
                payload: {
                    searchTerm,
                    ...response.search
                }
            })
        }
    } catch (e) {
        console.log(e)
    }

}

export const loadMoreData = async (searchTerm: string, selectedValue: string, after: string, dispatch: any, setLoading: (arg0: boolean) => void) => {
    try {
        const isUser = selectedValue === 'users'
        const response: any = await Service({
            searchString: searchTerm,
            after
        }, isUser ? loadMoreUserQuery : loadMoreRepoQuery, selectedValue)
        if (response.search && response.search?.nodes?.length) {
            setLoading(false);
            dispatch({
                type: isUser ? MORE_USER_FETCHED : MORE_REPO_FETCHED,
                payload: {
                    searchTerm,
                    ...response.search
                }
            })
        }
    } catch (e) {
        console.log(e)
    }

}
