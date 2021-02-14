import React from 'react';
import styles from './Repository.module.scss';

interface listProps {
    data: {
        nodes: []
    },
    Component: any
}

const List: React.FC<listProps> = ({data, Component}) => {
    const renderRepos = (data: any) => {
        const rows: any = [];
        let items: any = [];

        data.nodes.map((item: any, index: number) => {
            if (index % 4 === 3) {
                rows.push(<div className={styles.wrapper} key={index}>{items}</div>)
                items = [];
            } else {
                items.push(<Component item={item} key={index}/>)
            }
        });

        return rows;
    }

    return (
        <>
            {renderRepos(data)}
        </>
    )
}

export default List;