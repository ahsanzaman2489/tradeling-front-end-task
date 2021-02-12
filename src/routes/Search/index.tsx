import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import SearchBox from '../../componenets/SearchBox'


interface searchProps {

}

const Search: React.FC<searchProps> = () => {
    let match = useRouteMatch();
    return (
        <>
            <SearchBox/>
            <Switch>
                <Route path={`${match.path}users`}>
                    Users
                </Route>
                <Route path={`${match.path}repo`}>
                    Repository
                </Route>
            </Switch>
        </>
    )
}

export default Search;