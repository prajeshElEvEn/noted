import React, { useState } from 'react'
import Header from '../components/Header'
import Show from '../assets/svg/show.svg'
import Hide from '../assets/svg/hide.svg'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [passwordType, setPasswordType] = useState('password')

    const nav = useNavigate()

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
        if (passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (formData.email === '' || formData.password === '') {
            toast.warn('Please fill in all the fields!')
        } else {
            toast.success('Registration Successful!')
            console.log(formData)
            setFormData({
                email: '',
                password: '',
            })
            nav('/')
        }
    }

    return (
        <>
            <Header
                choice='register'
            />
            <div className='container'>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='form-field'>
                        <div
                            className='label'
                        >
                            Email Id
                        </div>
                        <div className='input'>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter your email id'
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='form-field'>
                        <div
                            className='label'
                        >
                            Password
                        </div>
                        <div className='input'>
                            <input
                                type={passwordType}
                                name='password'
                                placeholder='Enter your password'
                                value={formData.password}
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                            />
                            <img
                                src={passwordVisibility ? Hide : Show}
                                alt='Show Password'
                                onClick={() => {
                                    handlePasswordVisibility()
                                }}
                            />
                        </div>
                    </div>
                    <div className='form-field'>
                        <div className='input-btn'>
                            <input
                                type='submit'
                                value='Login'
                            />
                        </div>
                    </div>
                    <div className='form-field'>
                        <div className='label'>
                            Don't have an account? &nbsp;
                            <span>
                                <Link to='/register'>
                                    Register
                                </Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage
