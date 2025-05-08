import React from 'react'

export const Digit = (props) => {
    return (
        <div className='col-2'>
            <div className="card text-center mb-3 border border-black">
                <div className="card-body">
                    <h1 className="card-title display-1 m-5"><strong>{props.digito}</strong></h1>
                </div>
            </div>
        </div>
    )
}

export default Digit
