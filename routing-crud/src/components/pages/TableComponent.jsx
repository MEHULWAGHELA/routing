import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Table } from 'reactstrap'
import axios from 'axios'
import { Formdata } from '../../App'
const TableComponent = () => {
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

  return (
    <div>
      <div className="container bg-body-secondary mt-3">
        <h2 className='text-center py-3'>Form</h2>
        <Table className="">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>City</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {value.arr?.map((x, i) => {
              return <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.age}</td>
                <td>{x.city}</td>
                <td>{x.gender}</td>
                <td>{x.hobbies}</td>
                <td>
                  <button onClick={() => deleteapi(x._id)} className='me-2 btn text-bg-danger'>Delete</button>
                  <button onClick={() => editFunction(x._id)} className='btn text-bg-warning'>Edit</button>
                </td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Sidebar(TableComponent)