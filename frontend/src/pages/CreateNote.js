import React, { useState } from 'react'
import Header from '../components/Header'
import { toast } from 'react-toastify'

const CreateNote = () => {
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        state: 'loggedIn'
    })
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (formData.title === '' || formData.content === '') {
            toast.warn('Please fill in all the fields!')
        } else {
            toast.success('Note added successfully!')
            console.log(formData)
            setFormData({
                title: '',
                content: '',
            })
        }
    }

    return (
        <>
            <Header
                user={user}
            />
            <div className='container'>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='form-field'>
                        <div
                            className='label'
                        >
                            Title
                        </div>
                        <div className='input'>
                            <input
                                type='text'
                                name='title'
                                placeholder='Enter a title'
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='form-field'>
                        <div
                            className='label'
                        >
                            Description
                        </div>
                        <div className='input'>
                            <textarea
                                type='text'
                                name='content'
                                placeholder='Enter some description'
                                rows={5}
                                value={formData.content}
                                onChange={e => setFormData({ ...formData, content: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='form-field'>
                        <div className='input-btn'>
                            <input
                                type='submit'
                                value='Edit Note'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateNote
