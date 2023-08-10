import React, { Fragment, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

const Hoc = (Component) => {
    const NewComponent = () => {
        let [hello, sethello] = useState()
        let formnavigate = useNavigate()
        let tablenavigate = useNavigate()
        let formpara = useParams()
        let tablepara = useParams()
        const newf = () => {
            sethello(hello + 1)
        }
        return (
            <Fragment>
                <Row>
                    <Col xs={2} className='bg-info vh-100 d-flex flex-column justify-content-around text-center'>
                        <Link to='/form' className='border-1 p-3'><button className='btn btn-info-subtle border-danger fs-2' onClick={newf}>Form</button></Link>
                        <Link to='/table' className='border-1 p-3'><button className='btn btn-info-subtle border-danger fs-2' onClick={newf}>Table</button></Link>
                    </Col>
                    <Col xs={10}>
                        <Component formnavigate={formnavigate} tablenavigate={tablenavigate} formpara={formpara} tablepara={tablepara} />
                    </Col>
                </Row>
            </Fragment>
        )
    }
    return NewComponent
}

export default Hoc