import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Sidebar = (Component) => {
    const NewComponent = () => {
        return (
            <div className='row gx-0'>
                <div className="col-2 bg-primary vh-100 text-center p-2 d-flex align-items-center flex-wrap">
                    <Link to='/form' className='mb-2 d-block w-100'><button className='py-5 fs-2 d-block btn btn-secondary w-100'>Form</button></Link>
                    <Link to='/table' className='mb-2 d-block w-100'><button className='py-5 fs-2 d-block btn btn-secondary w-100'>Table</button></Link>
                </div>
                <div className="col-10">
                    <Component />
                </div>
            </div>
        )
    }
    return NewComponent
}

export default Sidebar
