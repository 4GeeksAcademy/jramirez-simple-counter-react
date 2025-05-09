import React from 'react'

export const Digit = (props) => {
    return (
        <div className='col'>
            <div className="card text-center my-3 border border-2 border-white show text-bg-dark">
                <div className="card-body bg bg-dark">
                    <h1 className="card-title display-1 m-5"><strong>{props.digito}</strong></h1>
                </div>
            </div>
        </div>
    )
}

export default Digit
