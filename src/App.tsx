import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import styles from './App.module.scss';
import Search from "./routes/Search/";


function App() {
    const history = createBrowserHistory();
    return (
        <div className={styles.Container}><Router history={history}>
            <Switch>
                <Route component={Search} path="/"/>
            </Switch>
        </Router></div>
    );
}

export default App;
