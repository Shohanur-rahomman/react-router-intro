import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <p>This is users</p>
        </div>
    );
};

export default Users;