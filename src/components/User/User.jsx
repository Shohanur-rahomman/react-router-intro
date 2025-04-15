import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const {id,name,email,phone} = user;
    return (
        <div>
            <p>name : {name }</p>
            <p>email : {email }</p>
            <p>phone : {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;