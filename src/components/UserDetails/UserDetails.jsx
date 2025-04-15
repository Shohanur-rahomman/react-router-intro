import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userData = useLoaderData();
    const { website ,name} = userData;
    console.log(userData);
    return (
        <div>
            <p>users details</p>
            <p>name : {name }</p>
            <p>web site : {website }</p>
        </div>
    );
};

export default UserDetails;