import {Service} from "../Services";
import {searchUserQuery, searchRepoQuery} from "../Services/queries";

export const searchUsers = async (searchText: any, dispatch: any) => {
    dispatch({
        type: 'fetchingUsers',
    })
    const response: any = await Service(searchText, searchUserQuery)

    if (response.search) {
        dispatch({
            type: 'UsersFetched',
            payload: response.search
        })
    }
}

export const searchRepo = async (searchText: any, dispatch: any) => {
    dispatch({
        type: 'fetchingRepos',
    })
    const response: any = await Service(searchText, searchRepoQuery)

    if (response.search) {
        dispatch({
            type: 'reposFetched',
            payload: response.search
        })
    }
}
