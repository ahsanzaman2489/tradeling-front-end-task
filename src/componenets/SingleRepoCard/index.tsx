import React from 'react';
import styles from './SingleReporCard.module.scss';

interface repoProps {
    item: {
        name: String
    }
}

const SingleRepoCard: React.FC<repoProps> = ({item}) => {
    return (
        <div className={'card'}>
            {item.name}
        </div>
    )
}

export default SingleRepoCard;