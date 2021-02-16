import React from 'react';

interface repoProps {
    item: {
        name: string,
        url: string,
        stargazerCount: number,
        isPrivate: boolean,

        primaryLanguage: {
            color: string,
            name: string
        },
        owner: {
            login: string
        },
        forks: {
            totalCount: string
        },
        pullRequests: {
            totalCount: string
        },
    }
}

const SingleRepoCard: React.FC<repoProps> = ({item}) => {
    const {name, url, owner, stargazerCount, forks, primaryLanguage, pullRequests} = item;
    return (
        <div className="card">
            <div className="content">
                <div>
                    <p className="name"><a href={url} target={'_blank'} rel="noreferrer">{name}</a></p>
                    <p className="language">
                        <span className="languageColor"
                              style={{background: primaryLanguage?.color}}/> {primaryLanguage?.name}
                    </p>
                    <p className="userName">{owner?.login}</p>
                </div>
                <div className="following">
                    <ul>
                        <li>Stars: {stargazerCount}</li>
                        <li>forks: {forks?.totalCount}</li>
                        <li>Pull Requests: {pullRequests?.totalCount}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleRepoCard;