import React, {useEffect, useRef, useContext, useCallback, useState} from 'react';
import styles from './List.module.scss';
import {SearchContext} from "../../context/searchContext";
import {debounce} from "lodash";
import {loadMoreData} from "../../actions/SearchActions";
import {useDispatch} from "react-redux";
import Loading from "../Loading";

interface listProps {
    data: {
        nodes: any,
        pageInfo: any
    },
    Component: any
}

const List: React.FC<listProps> = ({data, Component}) => {
    const listRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const {searchTerm, selectValue} = useContext(SearchContext);
    const {pageInfo} = data;

    const [loading, setLoading] = useState(false) as any;

    const {endCursor, hasNextPage} = pageInfo;
    const dispatch = useDispatch();

    const loadMore = (selectValue: string) => {
        setLoading(true)
        loadMoreData(searchTerm, selectValue, endCursor, dispatch, setLoading)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceLoadMoreData = useCallback(
        debounce((selectValue) => loadMore(selectValue), 1000)
        , [endCursor]);

    const trackScrolling = () => {
        if ((window.scrollY >= listRef.current.getBoundingClientRect().height - 730) && hasNextPage) {
            debounceLoadMoreData(selectValue)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', trackScrolling);
        return () => document.removeEventListener('scroll', trackScrolling);
    })


    const isSmallScreen = window.innerWidth <= 1000;
    const renderList = (data: any) => {
        if (!data.nodes?.length) return (<div className={styles.noData}>No data available</div>)
        const rows: any = [];
        let items: any = [];

        data.nodes.map((item: any, index: number) => {
            items.push(<Component item={item} key={index}/>)
            if (isSmallScreen ? index % 2 === 1 || data.nodes.length < 2 : index % 3 === 2 || data.nodes.length < 3) {
                rows.push(<div className={styles.wrapper} key={index}>{items}</div>)
                items = [];
            }
            return item
        });

        return rows;
    }

    return (
        <div ref={listRef}>
            {renderList(data)}
            {loading && <Loading/>}
        </div>
    )
}

export default List;