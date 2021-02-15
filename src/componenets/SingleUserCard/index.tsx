import React from 'react';

interface userProps {
    item: {
        avatarUrl: any;
        name: string,
        login: string,
        url: string,
        followers: {
            totalCount: number
        },
        following: {
            totalCount: number
        },
        repositories: {
            totalCount: number
        }
    }
}

const SingleUserCard: React.FC<userProps> = ({item}) => {

    const {name, login, avatarUrl, followers, following, repositories, url} = item;

    return (
        <div className="card">
            <div className="avatar">
                <img src={avatarUrl} alt=""/>
            </div>
            <div className="content">
                <div>
                    <p className="name"><a href={url} target={'_blank'}>{name}</a></p>
                    <p className="userName">{login}</p>
                </div>
                <div className="following">
                    <ul>
                        <li>followers: {followers?.totalCount}</li>
                        <li>following: {following?.totalCount}</li>
                        <li>Repos: {repositories?.totalCount}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleUserCard;