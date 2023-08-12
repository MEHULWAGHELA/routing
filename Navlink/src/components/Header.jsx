import { Link, NavLink } from "react-router-dom"

const Header = (Component) => {
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
    {/* navlink is add active class on which path we are currently */ }
    const NewComponent = () => {
        return (
            <div>
                <div className="container-fluid bg-info">
                    <div className='d-flex justify-content-around p-2'>
                        {/* <div className="ms-auto p-2 m-2 bg-white"><Link to={'/'} >Home</Link></div>
                        <div className="p-2 m-2 bg-white"><Link to={'/About'} >About</Link></div>
                        <div className="p-2 m-2 bg-white"><Link to={'/Contact'}>Contact</Link></div>
                        <div className="me-auto m-2 p-2 bg-white"><Link to={'/Service'}>Service</Link></div> */}
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
                </div>
            </div>
        )
    }
    return NewComponent
}
export default Header

