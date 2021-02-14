import React from 'react';
import List from "../../componenets/List";
import SingleUserCard from "../../componenets/SingleUserCard";

const Users: React.FC<any> = ({usersList}) => {

    return (
        <>
            <List data={usersList} Component={SingleUserCard}/>
        </>
    )
}

export default Users;