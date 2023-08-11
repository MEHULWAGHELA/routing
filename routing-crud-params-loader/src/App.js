import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TableComponent from './components/pages/TableComponent';
import FormComponent from './components/pages/FormComponent';
import { useState } from 'react';
import SpinnerComponent from './components/SpinnerComponent';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/form' element={<FormComponent />} >
            <Route path=':idnew' />
          </Route>
          <Route path='/' element={<Navigate to={'/form'} />} />
          <Route path='/table' element={<TableComponent />} >
            <Route path=':id' />
          </Route>
        </Routes>
      </BrowserRouter>
      <SpinnerComponent />
    </div>
  );
}

export default App;
