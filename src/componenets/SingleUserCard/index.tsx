import React from 'react';

interface repoProps {
    item: {
        name: String
    }
}

const SingleUserCard: React.FC<repoProps> = ({item}) => {
    return (
        <div className='card'>
            {item.name}
        </div>
    )
}

export default SingleUserCard;