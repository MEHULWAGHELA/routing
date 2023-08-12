import React from 'react'
import Header from '../Header'
import { useParams } from 'react-router-dom'

const Service = () => {
    let params = useParams()
    console.log(params)
    return (
        <div>
            Service
            {params.number}
        </div>
    )
}

export default Header(Service)
