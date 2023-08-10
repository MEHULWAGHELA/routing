import axios from 'axios'
import React, { Component } from 'react'
import { Container, Table } from 'reactstrap'
import Hoc from './Hoc'

class TableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: { hobbies: [] },
            arr: [],
            reference: '',
            formpara: ''
        }
    }

    componentDidUpdate() {
        console.log(this.props.formpara)
    }
    getData = () => {
        axios.get('https://student-api.mycodelibraries.com/api/user/get')
            .then((res) => {
                this.setState({ arr: [...res.data.data] })
            })
            .catch((err) => { console.log(err) })
    }
    componentDidMount() {
        this.getData()
    }

    editFunction = (id) => {
        this.props.formnavigate('/form/' + id)
        axios.get('https://student-api.mycodelibraries.com/api/user/get-user-by-id?id=' + id)
            .then((res) => {
                res.data.data.hobbies = res.data.data.hobbies.split(',')
                this.state.obj = { ...res.data.data }
                this.setState({
                    obj: { ...this.state.obj }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    deleteFunction = (id) => {
        axios.delete('https://student-api.mycodelibraries.com/api/user/delete?id=' + id).then((res) => {
            this.getData()
        }).catch((err) => {

        })
    }
    render() {
        return (
            <Container className='my-5'>
                <h1 className='text-center'>Table</h1>
                <Table
                    bordered
                    dark
                    hover
                    responsive
                    striped
                >
                    <thead>
                        <tr>
                            <th>
                                Sr No
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                Gender
                            </th>
                            <th>
                                Hobbies
                            </th>
                            <th>
                                Profile
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.arr.map((x, i) => {
                            return (
                                <tr key={i}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <th>
                                        {x.firstName}
                                    </th>
                                    <th>
                                        {x.lastName}
                                    </th>
                                    <th>
                                        {x.age}
                                    </th>
                                    <th>
                                        {x.city}
                                    </th>
                                    <th>
                                        {x.gender}
                                    </th>
                                    <th>
                                        {x.hobbies}
                                    </th>
                                    <th>
                                        <img src={x.image} alt="" style={{ height: '50px', width: '50px' }} />
                                    </th>
                                    <th>
                                        <button className='btn me-2 btn-warning' onClick={() => this.editFunction(x._id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => this.deleteFunction(x._id)}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container >
        )
    }
}

export default Hoc(TableComponent)