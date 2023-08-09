import React from 'react'
import Sidebar from '../Sidebar'
import { useLocation } from 'react-router-dom'
function About() {
    let location = useLocation()
    console.log(location)
    /* useLocation use for get path of page and full object give */
    return (
        <div>About</div>
    )
}

export default Sidebar(About)