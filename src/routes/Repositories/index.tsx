import React from 'react';
import List from "../../componenets/List";
import SingleRepoCard from "../../componenets/SingleRepoCard";

const Repos: React.FC<any> = ({repoList}) => {
    return (
        <>
            <List data={repoList} Component={SingleRepoCard}/>
        </>
    )
}

export default Repos;