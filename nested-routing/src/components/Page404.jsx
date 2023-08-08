import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
    const navigate = useNavigate()
    const Homepage = () => {
        window.location.reload()/* to reload current page */
        window.location.href = '/'/* to go to home page or any path  */
        navigate('/contact')
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='border border-1 p-5 border-danger border-3 rounded-2 text-center'>
                <h1 className='bg-danger text-white'>Error-404</h1>
                <h2>Page not Found</h2>
                <button onClick={Homepage} className='btn btn-dark mt-3'>Go To Home Page</button>
            </div>
        </div>
    )
}
export default Page404