import axios from 'axios'
import React, { Component } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import Hoc from './Hoc'

class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: { hobbies: [] },
            arr: [],
            reference: '',
        }
    }

    save = (e) => {
        e.preventDefault()
        let formdata = new FormData()
        formdata.append('firstName', this.state.obj.firstName)
        formdata.append('lastName', this.state.obj.lastName)
        formdata.append('age', this.state.obj.age)
        formdata.append('gender', this.state.obj.gender)
        formdata.append('hobbies', this.state.obj.hobbies)
        formdata.append('userImage', this.state.obj.image)
        formdata.append('city', this.state.obj.city)
        if (this.state.obj._id === undefined) {
            axios.post('https://student-api.mycodelibraries.com/api/user/add', formdata).then((res) => {
                this.getData()
                this.setState({ obj: { hobbies: [] }, reference: '' })
                this.props.formnavigate('/table')
            }).catch((err) => { console.log(err) })
        }
        else {
            formdata.append('id', this.state.obj._id)
            axios.post('https://student-api.mycodelibraries.com/api/user/update', formdata).then((res) => {
                this.getData()
                this.setState({ obj: { hobbies: [] }, reference: '' })
                this.props.formnavigate('/table')
            }).catch((err) => { console.log(err) })
        }
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
        this.setState({ formpara: this.props.formpara })
        if (Object.values(this.props.formpara).length != 0) {
            this.editFunction(this.props.formpara.formpara)
        }
    }
    changeEvent = (e) => {
        if (e.target.name === 'image') {
            this.state.obj[e.target.name] = e.target.files[0]
            this.state.reference = e.target.value
        }
        else if (e.target.name === 'hobbies') {
            if (e.target.checked) {
                this.state.obj.hobbies = [...this.state.obj.hobbies, e.target.value]
            }
            else {
                this.state.obj.hobbies = this.state.obj.hobbies.filter((x) => x != e.target.value)
            }
        }
        else {
            this.state.obj[e.target.name] = e.target.value
        }
        this.setState({ obj: { ...this.state.obj }, reference: this.state.reference })
    }
    editFunction = (id) => {
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
            <div className='vh-100'>
                <Container className='h-100 border border-1 p-5 border-danger g-0' style={{backgroundColor:'#EF8C86'}}>
                    <h1 className='my-2 text-center py-4'>Form</h1> 
                    <Form className='my-2' onSubmit={this.save}>
                        <Row>
                            <Col xs={6}>
                                <FormGroup floating>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder="firstName"
                                        type="text"
                                        onChange={this.changeEvent}
                                        value={this.state.obj.firstName || ''}
                                    />
                                    <Label for="firstName">
                                        First Name
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup floating>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="lastName"
                                        type="text"
                                        onChange={this.changeEvent}
                                        value={this.state.obj.lastName || ''}
                                    />
                                    <Label for="lastName">
                                        Last Name
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup floating>
                                    <Input
                                        id="age"
                                        name="age"
                                        placeholder="age"
                                        type="number"
                                        onChange={this.changeEvent}
                                        value={this.state.obj.age || ''}
                                    />
                                    <Label for="age">
                                        Age
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup floating>
                                    <select className='form-control'
                                        name='city'
                                        id='city'
                                        onChange={this.changeEvent}
                                        value={this.state.obj.city || ''}
                                    >
                                        <option value="Surat">Surat</option>
                                        <option value="Bharuch">Bharuch</option>
                                        <option value="Ahmedabad">Ahmedabad</option>
                                        <option value="Vadodara">Vadodara</option>
                                    </select>
                                    <Label for="age">
                                        City
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col className="">
                                <Label
                                    className=""
                                    for=""
                                >
                                    Gender
                                </Label>
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <Input
                                                id="male"
                                                name="gender"
                                                placeholder=""
                                                type="radio"
                                                value='male'
                                                onChange={this.changeEvent}
                                                checked={this.state.obj.gender === "male"}
                                            />
                                            <Label
                                                className="gender mx-2"
                                                for="gender"
                                            >
                                                Male
                                            </Label>
                                            <Input
                                                id="female"
                                                name="gender"
                                                placeholder=""
                                                type="radio"
                                                value='female'
                                                onChange={this.changeEvent}
                                                checked={this.state.obj.gender === "female"}
                                            />
                                            <Label
                                                className="gender mx-2"
                                                for="gender"
                                            >
                                                Female
                                            </Label>
                                            <Input
                                                id="trans"
                                                name="gender"
                                                placeholder=""
                                                type="radio"
                                                value='trans'
                                                onChange={this.changeEvent}
                                                checked={this.state.obj.gender === "trans"}
                                            />
                                            <Label
                                                className="gender mx-2"
                                                for="gender"
                                            >
                                                Trans
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} className="">
                                <Label
                                    className=""
                                    for=""
                                >
                                    Hobbies
                                </Label>
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup>
                                            <Input
                                                id="travelling"
                                                name="hobbies"
                                                placeholder=""
                                                type="checkbox"
                                                value='travelling'
                                                onChange={this.changeEvent}
                                                checked={this.state.obj.hobbies?.includes('travelling')}
                                            />
                                            <Label
                                                className="hobbies mx-2"
                                                for="hobbies"
                                            >
                                                Travelling
                                            </Label>
                                            <Input
                                                id="dancing"
                                                name="hobbies"
                                                placeholder=""
                                                type="checkbox"
                                                value='dancing'
                                                onChange={this.changeEvent}
                                                checked={this.state.obj.hobbies?.includes('dancing')}
                                            />
                                            <Label
                                                className="hobbies mx-2"
                                                for="hobbies"
                                            >
                                                Dancing
                                            </Label>
                                            <Input
                                                id="singing"
                                                name="hobbies"
                                                placeholder=""
                                                type="checkbox"
                                                onChange={this.changeEvent}
                                                value='singing'
                                                checked={this.state.obj.hobbies?.includes('singing')}
                                            />
                                            <Label
                                                className="hobbies mx-2"
                                                for="hobbies"
                                            >
                                                Singing
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6}>
                                <FormGroup floating>
                                    <Input
                                        id="image"
                                        name="image"
                                        placeholder="image"
                                        type="file"
                                        onChange={this.changeEvent}
                                        value={this.state.reference}
                                    />
                                    <Label for="image">
                                        Profile
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className='text-center'>
                            <Button>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div >
        )
    }
}

export default Hoc(FormComponent)