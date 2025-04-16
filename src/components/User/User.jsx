import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [visitHome,setVisitHome] = useState(false)
    const { id, name, email, phone } = user;
    
    const userPostPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());

    if (visitHome) {
        return <Navigate to={'/'}></Navigate>
    }

    return (
        <div>
            <p>name : {name }</p>
            <p>email : {email }</p>
            <p>phone : {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>Info {showInfo ? "show" : 'hide'}</button>
            {
                showInfo && <Suspense fallback={<span>Loading</span>}>
                    <UserDetails2 userPostPromise={userPostPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={()=>setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;