import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <div className="nav-left"></div>
            <div className="nav-right">
                <Link to={'/explore'} className='nav-item'>
                    Explore
                </Link>
                <Link to={'/contact'} className='nav-item'>
                    Contact Us
                </Link>
                <Link to={'/about'} className='nav-item'>
                    Know More
                </Link>
                <Link to={'/login'} className='nav-btn-outline'>
                    Login
                </Link>
                <Link to={'/register'} className='nav-btn'>
                    Sign Up
                </Link>
            </div>
        </nav>
    )
}

export default Header
