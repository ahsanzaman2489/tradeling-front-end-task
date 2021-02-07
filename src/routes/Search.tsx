import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";


interface searchProps {

}

const Search: React.FC<searchProps> = () => {
    let match = useRouteMatch();
    console.log(match)
    return (
        <div>
            Search with box
            <Switch>
                <Route path={`/users`}>
                    hello
                </Route>
                <Route path={`/repo`}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}

export default Search;