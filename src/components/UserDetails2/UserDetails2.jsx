import React, { use } from 'react';

const UserDetails2 = ({ userPostPromise }) => {
    const { name, username } = use(userPostPromise);
    return (
        <div>
            <p>name : {username }</p>
            <p>user name : {name }</p>
        </div>
    );
};

export default UserDetails2;