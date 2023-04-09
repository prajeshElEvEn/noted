import React from 'react'
import Github from '../assets/svg/github.svg'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-left'>
                    &copy; {new Date().getFullYear()} | ElEvEn Co.
                </div>
                <div className='footer-right'>
                    <a href='https://github.com/prajeshElEvEn/noted' target='_blank' rel="noreferrer" >
                        <img src={Github} alt='Github' />
                        <span>
                            Github
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
