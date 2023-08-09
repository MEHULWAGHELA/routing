import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TableComponent from './components/pages/TableComponent';
import FormComponent from './components/pages/FormComponent';
import { createContext, useState } from 'react';
export const Formdata = createContext()
function App() {
  let [arr, setarr] = useState([])
  let [obj, setobj] = useState({ hobbies: '' })
  return (
    <Formdata.Provider value={{ arr, setarr, obj, setobj }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/form' element={<FormComponent />} />
            <Route path='/' element={<Navigate to={'/form'} />} />
            <Route path='/table' element={<TableComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Formdata.Provider>
  );
}

export default App;
