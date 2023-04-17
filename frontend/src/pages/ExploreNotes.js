import React, { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

const ExploreNotes = () => {
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        state: 'loggedIn'
    })
    const [cards, setCards] = useState([
        {
            title: 'Note 1',
            description: 'This is a note',
            date: '2021-07-01',
            author: 'John Doe'
        }
    ])
    return (
        <>
            <Header
                user={user}
            />
            <div className='container'>
                <div className='card-container'>
                    <div className='cards-header'>
                        Notes around the world
                    </div>
                    {
                        cards.length > 0 ? (
                            <div className='cards'>
                                <Card
                                    title='Note 1'
                                    description='This is a note'
                                    date='2021-07-01'
                                    author='John Doe'
                                />
                            </div>
                        ) : (
                            <div className='cards'>
                                <Card
                                    title="You haven't created any notes yet!"
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ExploreNotes
