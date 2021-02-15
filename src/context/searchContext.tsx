import React, {createContext, useEffect, useState} from 'react';

export const SearchContext: any = createContext({});

export const SearchProvider = (props: { children: any; }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectValue, setSelectValue] = useState('');

    // eslint-disable-next-line react/prop-types
    const {children} = props;
    useEffect(() => {
        // setSelectValue(isUserPath ? "users" : "repositories");
    }, [])
    return (
        <SearchContext.Provider value={
            {
                searchTerm,
                setSearchTerm,
                selectValue,
                setSelectValue
            }
        }
        >
            {children}
        </SearchContext.Provider>
    );
};