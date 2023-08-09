import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Formdata } from '../../App'
const FormComponent = () => {
  const value = useContext(Formdata)



  const setData = () => {
    axios.post('https://student-api.mycodelibraries.com/api/student/add', value.obj)
      .then((res) => {
        console.log(res)
        getData()
      }
      )
      .catch((err) => console.log(err))
  }
  const getData = () => {
    axios.get('https://student-api.mycodelibraries.com/api/student/get')
      .then((res) => {
        value.arr = res.data.data
        value.setarr([...value.arr])
      }
      )
      .catch((err) => console.log(err))
  }
  const deleteapi = (a) => {
    a = `https://student-api.mycodelibraries.com/api/student/delete?id=${a}`
    axios.delete(a).then((res) => {
      getData()
    }).catch((err) => console.log(err))
  }

  const editFunction = (id) => {
    axios.get("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=" + id).then((res) => {
      value.obj = res.data.data
      value.obj.hobbies = value.obj.hobbies.split(",")
      value.setobj({ ...value.obj })
    }).catch((err) => { console.log(err) })
  }

  const updateapi = () => {
    value.obj.id = value.obj._id
    axios.post('https://student-api.mycodelibraries.com/api/student/update', value.obj).then((res) => getData()).catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  const changeData = (e) => {
    if (e.target.name === "hobbies") {
      if (e.target.checked) {
        value.obj.hobbies = [...value.obj.hobbies, e.target.value]
      }
      else {
        value.obj.hobbies = value.obj.hobbies.filter((x) => !x.includes(e.target.value))
      }
    }
    else {
      value.obj[e.target.name] = e.target.value
    }
    value.setobj({ ...value.obj })
  }

  const submitFunction = (e) => {
    e.preventDefault();
    if (value.obj._id === undefined) {
      setData()
    }
    else {
      updateapi()
    }
    value.obj = { hobbies: '' }
    value.setobj({ ...value.obj })
  }
  return (
    <div>
      <Row>
        <Col xs={6} className="offset-3">
          <Container className="mt-1 py-1 px-4 border border-1 border-black rounded-2 shadow-lg">
            <h1 className="text-center py-3">Student Form</h1>
            <Form onSubmit={(e) => { submitFunction(e) }}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstName" className="fw-600">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={value.obj.firstName || ''}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastName" className="fw-600 ">
                      last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder=""
                      type="text"
                      className="main"
                      onChange={changeData}
                      value={value.obj.lastName || ''}

                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="age" className="fw-600 ">
                      Age
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      placeholder=""
                      type="number"
                      className="main"
                      onChange={changeData}
                      value={value.obj.age || ''}

                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city" className="fw-600 ">
                      City
                    </Label>
                    <select onChange={changeData} value={value.obj.city || ''} name="city" className="form-select">
                      <option value="surat">Surat</option>
                      <option value="bharuch">Bharuch</option>
                      <option value="vadodara">Vadoadara</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label for="example" className="fw-600 ">
                    Gender
                  </Label>
                  <div className="d-flex">
                    <div>
                      <Input
                        id="exampleCheck3"
                        name="gender"
                        type="radio"
                        className="gender me-2"
                        onChange={changeData}
                        value="Male"
                        checked={value.obj.gender === "Male" || value.obj.gender === "male"}
                      />
                      <Label
                        check
                        for="radio"
                        className="px-2"
                      >
                        Male
                      </Label>
                    </div>
                    <div>
                      <Input
                        id="exampleCheck3"
                        name="gender"
                        type="radio"
                        className="gender me-2"
                        onChange={changeData}
                        value="Female"
                        checked={value.obj.gender === "Female" || value.obj.gender === "female"}
                      />

                      <Label
                        check
                        for="radio"
                        className="px-2"
                      >
                        Female
                      </Label>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="">
                  <Label
                    check
                    for="example"
                    className="fw-600 
                                my-2"
                  >
                    hobbies
                  </Label>
                  <Row className="">
                    <Col xs={3}>
                      <Input
                        id="Travelling"
                        name="hobbies"
                        type="checkbox"
                        className="language me-2"
                        onChange={changeData}
                        value="Travelling"
                        checked={value.obj.hobbies?.includes('Travelling')}
                      />
                      <Label
                        check
                        for="Travelling"
                        className="px-2"
                      >
                        Travelling
                      </Label>
                    </Col>
                    <Col xs={3}>
                      <Input
                        id="Reading"
                        name="hobbies"
                        type="checkbox"
                        className="language me-2"
                        onChange={changeData}
                        value="Reading"
                        checked={value.obj.hobbies?.includes('Reading')}
                      />
                      <Label
                        check
                        for="Reading"
                        className="px-2"
                      >
                        Reading
                      </Label>
                    </Col>
                    <Col xs={3}>
                      <Input
                        id="Exersice"
                        name="hobbies"
                        type="checkbox"
                        className="language me-2"
                        onChange={changeData}
                        value="Exersice"
                        checked={value.obj.hobbies?.includes('Exersice')}
                      />
                      <Label
                        check
                        for="Exersice"
                        className="px-2"
                      >
                        Exersice
                      </Label>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="text-center">
                <button className="my-2 btn btn-secondary submit fs-4">
                  Submit
                </button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Sidebar(FormComponent)