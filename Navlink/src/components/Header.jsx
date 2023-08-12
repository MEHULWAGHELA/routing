import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"

const Header = (Component) => {
    {/* navlink is add active class on which path we are currently */ }
    const NewComponent = () => {
        let current = useLocation();
        let arr = [
            {
                path: '/',
                text: 'Home'
            },
            {
                path: '/About',
                text: 'About'
            },
            {
                path: '/Contact',
                text: 'Contact'
            },
            {
                path: '/Service',
                text: 'Service'
            },
        ]
        return (
            <div>
                {console.log(current)}
                <div className="container-fluid bg-info">
                    <div className='d-flex justify-content-around p-2'>
                        {arr.map((x, i) => {
                            return (
                                <Link key={i} to={x.path}>
                                    <div className={`p-2 m-2 bg-white ${x.path == current.pathname ? 'color' : ''}`}>
                                        {x.text}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="container bg-secondary vh-100 text-white fs-3">
                        <Component />
                    </div>
                </div>

                {/*
                it is use when navlink use.. when we use 
                .active {
                    color: red;
                } */}
                {/* <div className="container-fluid bg-info">
                    <div className='d-flex justify-content-around p-2'>
                        {arr.map((x, i) => {
                            return (
                                <NavLink to={x.path} >
                                    <div className="p-2 m-2 bg-white">
                                        {x.text}
                                    </div>
                                </NavLink>
                            )
                        })} 
                    </div>
                </div>
                <div>
                    <Component />
                </div> */}
            </div>
        )
    }
    return NewComponent
}
export default Header

