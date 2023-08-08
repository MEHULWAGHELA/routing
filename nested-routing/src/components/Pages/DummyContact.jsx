import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

/* in this we only use outlet that why we can use nested path and
in nested path we have use main contact page '' like black path */
function DummyContact() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Sidebar(DummyContact)