import React, {useContext} from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import SearchBox from '../../componenets/SearchBox'
import Users from "../Users";
import {useSelector} from "react-redux";
import Repos from "../Repositories";
import {SearchContext} from "../../context/searchContext";
import Loading from "../../componenets/Loading";

const Search: React.FC<any> = () => {
    const match = useRouteMatch();
    const {searchTerm} = useContext(SearchContext);

    const {users, repos} = useSelector((state: any) => ({
        users: state.users,
        repos: state.repos,
    }));
    return (
        <>
            <SearchBox/>
            <Switch>
                <Route path={`${match.path}users`}>
                    {users.isLoading ? <Loading/> : (users?.nodes?.length > 0 && searchTerm?.length > 2) &&
                        <Users usersList={users}/>}
                </Route>
                <Route path={`${match.path}repositories`}>
                    {repos.isLoading ? <Loading/> : (repos?.nodes?.length > 0 && searchTerm?.length > 2) &&
                        <Repos repoList={repos}/>}
                </Route>
            </Switch>
        </>
    )
}

export default Search;