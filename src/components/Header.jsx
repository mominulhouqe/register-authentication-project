import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header text-center  p-4'>
            <Link className='mx-3 text-decoration-none' to='/'>Home</Link>
            <Link className='mx-3 text-decoration-none' to='/login'>Login</Link>
            <Link className='mx-3 text-decoration-none' to='/register'>Register</Link>
            <Link className='mx-3 text-decoration-none' to='/registerrbs'>Register With Bootsrap</Link>
            
        </div>
    );
};

export default Header;