import { Link } from "react-router-dom"

const Header = (Component) => {
    const NewComponent = () => {
        return (
            <div>
                <div className="container-fluid bg-info">
                    <div className='d-flex justify-content-around p-2'>
                        <div className="ms-auto p-2 m-2 bg-white"><Link to={'/'} target='_blank'>Home</Link></div>
                        <div className="p-2 m-2 bg-white"><Link to={'/About'} target='_blank'>About</Link></div>
                        <div className="p-2 m-2 bg-white"><Link to={'/Contact'}>Contact</Link></div>
                        <div className="me-auto m-2 p-2 bg-white"><Link to={'/Service/1234'}>Service</Link></div>
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

