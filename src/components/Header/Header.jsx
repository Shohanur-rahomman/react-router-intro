import React from 'react';
import {  NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <>
            <h2>Hello</h2>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/phone'}>Phone</NavLink>
                <NavLink to={'/laptops'}>Laptops</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/users2'}>Users2</NavLink>
            </nav>  
        </>
    );
};

export default Header;