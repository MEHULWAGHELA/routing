import { Fragment } from "react"
import { Link } from "react-router-dom"

const Sidebar = (Component) => {
    const NewComponent = (props) => {
        return (
            <Fragment>
                <div className="container-fluid g-0">
                    <div className="row">
                        <div className="col-2 d-flex flex-column px-3" style={{ backgroundColor: '#499195', color: '#fff', height: '100vh' }}>
                            <div className="pb-5"><Link to='/'>HOME</Link></div>
                            <div className="pb-5"><Link to='/about'>About</Link></div>
                            <div className="pb-5"><Link to='/contact'>Contact</Link></div>
                        </div>
                        <div className="col-10 g-0">
                            <div className="d-flex justify-content-center" style={{ backgroundColor: '#70B0E0' }}>
                                <div className="p-5"><Link to='/'>HOME</Link></div>
                                <div className="p-5"><Link to='/about'>About</Link></div>
                                <div className="p-5"><Link to='/contact'>Contact</Link></div>
                            </div>
                            <div className="bg-danger-subtle">
                                <Component setislogin={props} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    return NewComponent
}
export default Sidebar