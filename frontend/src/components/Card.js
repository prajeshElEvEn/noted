import React from 'react'
import Edit from '../assets/svg/edit.svg'
import Delete from '../assets/svg/trash.svg'
import { useNavigate } from 'react-router-dom'

const Card = ({
    title,
    description,
    date,
    author,
    choice
}) => {

    const nav = useNavigate()
    return (
        <div
            className='card'
        >
            <div className='card-header'>
                <div className='card-title'>
                    {
                        title
                    }
                </div>
                {
                    choice === 'mine' && (
                        <div className='btn-container'>
                            <div
                                className='btn'
                                onClick={() => {
                                    nav('/edit')
                                }}
                            >
                                <img src={Edit} alt='Edit' />
                            </div>
                            <div className='btn'>
                                <img src={Delete} alt='Delete' />
                            </div>
                        </div>
                    )
                }
            </div>
            {
                description && (
                    <div className='card-body'>
                        {
                            description
                        }
                    </div>
                )
            }
            {
                date && (
                    <div>
                        Last updated: &nbsp;
                        <span>
                            {
                                date
                            }
                        </span>
                    </div>
                )
            }
            {
                author && (
                    <div>
                        Author: &nbsp;
                        <span>
                            {
                                author
                            }
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Card
