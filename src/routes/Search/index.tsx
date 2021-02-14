import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import SearchBox from '../../componenets/SearchBox'
import Users from "../Users";
import {useSelector} from "react-redux";
import Repos from "../Repositories";
import loadingGif from "./loading.gif";

interface searchProps {

}

const Loading = () => <div className='loading'><img src={loadingGif} alt=""/></div>

const Search: React.FC<searchProps> = () => {
    let match = useRouteMatch();
    const {users, repos} = useSelector((state: any) => ({
        users: state.users,
        repos: state.repos,
    }));

    console.log(repos)
    return (
        <>
            <SearchBox/>
            <Switch>
                <Route path={`${match.path}users`}>
                    {users.isLoading ? <Loading/> : users?.nodes?.length > 0 && <Users usersList={users}/>}
                </Route>
                <Route path={`${match.path}repositories`}>
                    {repos.isLoading ? <Loading/> : repos?.nodes?.length > 0 && <Repos repoList={repos}/>}
                </Route>
            </Switch>
        </>
    )
}

export default Search;