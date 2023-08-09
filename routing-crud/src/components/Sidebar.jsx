import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (Component) => {
    const NewComponent = () => {
        return (
            <div className='row'>
                <div className="col-2 bg-primary vh-100">
                    <div><Link to='/form'>Form</Link></div>
                    <div><Link to='/table'>Table</Link></div>
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
