import React from 'react';
import styles from './List.module.scss';

interface listProps {
    data: {
        nodes: any
    },
    Component: any
}

const List: React.FC<listProps> = ({data, Component}) => {

    const isSmallScreen = window.innerWidth <= 1000;
    const renderList = (data: any) => {
        const rows: any = [];
        let items: any = [];

        data.nodes.map((item: any, index: number) => {
            items.push(<Component item={item} key={index}/>)
            if (isSmallScreen ? index % 2 === 1 : index % 3 === 2) {
                rows.push(<div className={styles.wrapper} key={index}>{items}</div>)
                items = [];
            }
        });

        return rows;
    }

    return (
        <>
            {renderList(data)}
        </>
    )
}

export default List;