import React from 'react'
import Sidebar from '../Sidebar'

const Home = (props) => {
    const loginfunction = () => {
        console.log(props)
        localStorage.setItem('islogin', JSON.stringify(false))
        props.setislogin.setislogin(false)
    }
    return (
        <div>
            <div>Home</div>
            <button className='btn btn-primary m-2 p-2' onClick={loginfunction}>LogOut</button>
        </div>
    )
}

export default Sidebar(Home)
