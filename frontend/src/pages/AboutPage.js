import React, { useState } from 'react'
import Header from '../components/Header'

const AboutPage = () => {
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        state: 'loggedIn'
    })
    return (
        <>
            <Header
                user={user}
            />
            <div className='container'>
                AboutPage
            </div>
        </>
    )
}

export default AboutPage
