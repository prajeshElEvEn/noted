import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-left'>
                &copy; {new Date().getFullYear()} | ElEvEn Co.
            </div>
            <div className='footer-right'>
                <a href='' target='_blank' >
                    Github
                </a>
            </div>
        </div>
    )
}

export default Footer
