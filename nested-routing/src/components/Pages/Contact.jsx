import React from 'react'
import Sidebar from '../Sidebar'
import Contact1 from './NestedPages/Contact1'
import { Outlet } from 'react-router-dom'

function Contact() {
    return (
        <div>
            <div>Contact</div>
            <Outlet />
        </div>
    )
}

export default Sidebar(Contact)