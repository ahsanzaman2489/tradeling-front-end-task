import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import styles from './App.module.scss';
import Search from "./routes/Search/";
import {SearchProvider} from "./context/searchContext";


function App() {
    const history = createBrowserHistory();
    return (
        <div className={styles.Container}><Router history={history}>
            <SearchProvider>
                <Switch>
                    <Route component={Search} path="/"/>
                </Switch>
            </SearchProvider>
        </Router></div>
    );
}

export default App;
