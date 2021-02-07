import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './App.css';
import Search from "./routes/Search";


function App() {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
                <Route  component={Search} path="/"/>
            </Switch>
        </Router>
    );
}

export default App;
