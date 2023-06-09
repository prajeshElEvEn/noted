import React, { useState } from 'react'
import Header from '../components/Header'
import Show from '../assets/svg/show.svg'
import Hide from '../assets/svg/hide.svg'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [passwordType, setPasswordType] = useState('password')
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
    const [confirmPasswordType, setConfirmPasswordType] = useState('password')

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
        if (passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    const handleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisibility(!confirmPasswordVisibility)
        if (confirmPasswordType === 'password') {
            setConfirmPasswordType('text')
        } else {
            setConfirmPasswordType('password')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.password === '' || formData.confirmPassword === '') {
            toast.warn('Please fill in all the fields!')
        } else if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match!')
        } else {
            toast.success('Registration Successful!')
            console.log(formData)
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
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
                            First Name
                        </div>
                        <div className='input'>
                            <input
                                type='text'
                                name='firstName'
                                placeholder='Enter your first name'
                                value={formData.firstName}
                                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='form-field'>
                        <div
                            className='label'
                        >
                            Last Name
                        </div>
                        <div className='input'>
                            <input
                                type='text'
                                name='lastName'
                                placeholder='Enter your last name'
                                value={formData.lastName}
                                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>
                    </div>
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
                        <div
                            className='label'
                        >
                            Confirm Password
                        </div>
                        <div className='input'>
                            <input
                                type={confirmPasswordType}
                                name='confirmPassword'
                                placeholder='Enter your password'
                                value={formData.confirmPassword}
                                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                            <img
                                src={confirmPasswordVisibility ? Hide : Show}
                                alt='Show Password'
                                onClick={() => {
                                    handleConfirmPasswordVisibility()
                                }}
                            />
                        </div>
                    </div>
                    <div className='form-field'>
                        <div className='input-btn'>
                            <input
                                type='submit'
                                value='Register'
                            />
                        </div>
                    </div>
                    <div className='form-field'>
                        <div className='label'>
                            Already have an account? &nbsp;
                            <span>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterPage
