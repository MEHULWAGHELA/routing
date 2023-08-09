import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (Component) => {
    const NewComponent = () => {
        return (
            <div className='row g-0'>
                <div className="col-2 bg-primary vh-100 text-center">
                    <div className='py-5 fs-2'><Link to='/form'>Form</Link></div>
                    <div className='py-5 fs-2'><Link to='/table'>Table</Link></div>
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
