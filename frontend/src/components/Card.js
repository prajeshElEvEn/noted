import React from 'react'

const Card = ({
    title,
    description,
}) => {
    return (
        <div className='card'>
            <div className='card-header'>
                {
                    title
                }
            </div>
            {
                description ? (
                    <div className='card-body'>
                        {
                            description
                        }
                    </div>
                ) : (null)
            }
        </div>
    )
}

export default Card
