import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../assets/svg/login.svg'
import Register from '../assets/svg/register.svg'

const Header = () => {
    return (
        <div className='nav-container'>
            <nav>
                <div className="nav-left">
                    <Link to={'/'} className='nav-item'>
                        Noted
                    </Link>
                </div>
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
                        <span>
                            Login
                        </span>
                        <img src={Login} alt='Login' />
                    </Link>
                    <Link to={'/register'} className='nav-btn'>
                        <span>
                            Sign Up
                        </span>
                        <img src={Register} alt='Register' />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
