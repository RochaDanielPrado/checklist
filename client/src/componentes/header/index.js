import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {

    return (
        <header className='header'>
            <NavLink className='lgo'>
                <img className='logo' src='./imagens/f_logo.png' alt='logo' />
            </NavLink>
            <Navbar />
        </header>
    );
}

export default Header;