import React, {useCallback, useState} from 'react';
import styles from './SearchBox.module.scss';
import classes from 'classnames';
import {GithubIcon} from "../../utils/icons";
import {debounce} from 'lodash';

const SearchBox: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [selectValue, setSelectValue] = useState('users');
    const selectBoxList = [
        {value: 'users', label: 'Users'},
        {value: 'repositories', label: 'Repositories'},
    ];

    const getData = (searchText: React.SetStateAction<string>) => {
        console.log(searchText)
    }
    const debounceSearchText = useCallback(
        debounce((searchText: React.SetStateAction<string>) => getData(searchText), 1000)
        , []);

    const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const searchText = e.currentTarget?.value;
        setSearchValue(searchText)
        if (searchText.length > 2) {
            debounceSearchText(searchText)
        }
    }

    const selectHandler = (e: { target: { value: React.SetStateAction<string> } }) => setSelectValue(e.target.value)
    return (
        <div className={classes(styles.wrapper, styles.default)}>
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

export default SearchBox;