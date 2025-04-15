import React, { use } from 'react';

const Users2 = ({ users2Promise }) => {

    const usersLoadData = use(users2Promise);
    console.log('user 2 data',usersLoadData);
    return (
        <div>
            <p>Users 2</p>
        </div>
    );
};

export default Users2;