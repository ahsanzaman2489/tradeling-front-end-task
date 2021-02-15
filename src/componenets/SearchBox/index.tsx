import React, {useCallback, useEffect, useState} from 'react';
import styles from './SearchBox.module.scss';
import classes from 'classnames';
import {GithubIcon} from "../../utils/icons";
import {debounce} from 'lodash';
import {searchUsers, searchRepo} from "../../actions/SearchActions";
import {useDispatch} from "react-redux";
import {withRouter} from 'react-router-dom';
import {REPO_FETCHING, USER_FETCHING} from "../../utils/actionTypes";

interface searchProps {
    history: any
}

const SearchBox: React.FC<searchProps> = ({history}) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectValue, setSelectValue] = useState(history.location.pathname === '/users' ? "users" : "repositories");
    const dispatch = useDispatch();
    const selectBoxList = [
        {value: 'users', label: 'Users'},
        {value: 'repositories', label: 'Repositories'},
    ];

    const getData = useCallback((searchText: React.SetStateAction<string>, value: React.SetStateAction<string> | string) => {
        if (value === 'users') {
            searchUsers(searchText, dispatch)
        } else {
            searchRepo(searchText, dispatch)
        }
    }, [searchValue, selectValue])

    const initLoading = (type: string) => type === 'users' ? dispatch({type: USER_FETCHING}) : dispatch({type: REPO_FETCHING})

    const debounceSearchText = useCallback(
        debounce((searchText: React.SetStateAction<string>, selectValue) => getData(searchText, selectValue), 1000)
        , []);

    const searchChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const searchText = e.currentTarget?.value;
        setSearchValue(searchText)
        if (searchText?.length > 2) {
            debounceSearchText(searchText, selectValue)
            history.push(`/${selectValue}`)
        } else if (history.location.pathname !== '/') {
            history.push('/')
        }
    }, [])

    const selectHandler = (e: { target: { value: React.SetStateAction<string> } }) => {
        const value = e.target.value;
        setSelectValue(value);
        history.push(`/${value}`)
        if (searchValue.length > 2) getData(searchValue, value)
    }

    useEffect(() => {
        if (searchValue?.length > 2) {
            initLoading(selectValue)
        }
    }, [searchValue, selectValue])


    return (
        <div className={classes(styles.wrapper, searchValue.length > 2 ? styles.top : '')}>
            <div className={styles.headingWrapper}>
                <GithubIcon width='50px' height='50px' className={styles.logo}/>
                <div>
                    <p>
                        Github Searcher
                    </p>
                    <p>Search users or repositories below</p>
                </div>
            </div>

            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={searchChangeHandler}
                    className={styles.input}
                />
                <select
                    name="search"
                    id="fields"
                    value={selectValue}
                    onChange={selectHandler}
                    className={styles.select}
                >
                    {selectBoxList.map((select) => <option value={select.value}
                                                           key={select.value}>{select.label}</option>)}
                </select>
            </div>
        </div>
    )
}

export default withRouter(SearchBox);