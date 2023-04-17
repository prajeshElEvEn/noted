import React, { useState } from 'react'
import Header from '../components/Header'

const HomePage = () => {
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
    })
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    })

    return (
        <>
            <Header
                user={user}
            />
            <div className='container'>
                HomePage
            </div>
        </>
    )
}

export default HomePage
