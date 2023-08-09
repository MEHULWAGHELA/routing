import React from 'react'

const Login = (props) => {
    const functionlogin = () => {
        localStorage.setItem('islogin', JSON.stringify(true))
        props.setislogin(true)
    }
    return (
        <>
            <div>Login</div>
            <button onClick={functionlogin} className='btn btn-primary m-2 p-2'>Login</button>
        </>
    )
}
export default Login