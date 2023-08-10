import React, { Fragment, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { FaWpforms } from 'react-icons/fa'
import { BsTable } from 'react-icons/bs'
const Hoc = (Component) => {
    const NewComponent = () => {
        let formnavigate = useNavigate()
        let formpara = useParams()
        return (
            <Fragment>
                <Row className='g-0'>
                    <Col xs={2} className='vh-100 d-flex flex-column justify-content-around text-center' style={{backgroundColor:'#32064A'}}>
                        <Link to='/form' className='border-1 p-3 bg-white w-100'><button className='btn btn-info-subtle border-danger fs-2' ><FaWpforms />Form</button></Link>
                        <Link to='/table' className='border-1 p-3 bg-white w-100'><button className='btn btn-info-subtle border-danger fs-2' ><BsTable />Table</button></Link>
                    </Col>
                    <Col xs={10}>
                        <Component formnavigate={formnavigate} formpara={formpara} />
                    </Col>
                </Row>
            </Fragment>
        )
    }
    return NewComponent
}

export default Hoc