import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Table } from 'reactstrap'
import axios from 'axios'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import loaderfun from '../loaderfunction'
const TableComponent = () => {
  const addnavigate = useNavigate()
  let [arr, setarr] = useState([])
  let [obj, setobj] = useState({ hobbies: '' })

  const getData = () => {
    loaderfun(true)
    axios.get('https://student-api.mycodelibraries.com/api/student/get')
      .then((res) => {
        arr = res.data.data
        setarr([...arr])
        loaderfun(false)
      }
      )
      .catch((err) => loaderfun(false))
  }
  const deleteapi = (a) => {
    loaderfun(true)
    a = `https://student-api.mycodelibraries.com/api/student/delete?id=${a}`
    axios.delete(a).then((res) => {
      getData()
      loaderfun(false)
    }).catch((err) => loaderfun(false))
  }

  const editFunction = (id) => {
    loaderfun(true)
    axios.get("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=" + id).then((res) => {
      obj = res.data.data
      obj.hobbies = obj.hobbies.split(",")
      setobj({ ...obj })
      loaderfun(false)
    }).catch((err) => { loaderfun(false) })
  }

  useEffect(() => {
    getData()
  }, [])

  const adddata = () => {
    addnavigate('/form')
  }
  return (
    <div>
      <Outlet />
      <div className="container bg-body-secondary mt-3">
        <div className='d-flex justify-content-evenly'>
          <button className='btn btn-primary' onClick={adddata}>+ADD DATA</button>
          <h2 className='text-center py-3'>Table</h2>
        </div>
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
            {arr?.map((x, i) => {
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
                  <Link to={'/form/' + x._id}><button onClick={() => editFunction(x._id)} className='btn text-bg-warning'>Edit</button></Link>
                </td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
    </div >
  )
}

export default Sidebar(TableComponent)