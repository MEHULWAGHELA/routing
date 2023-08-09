import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Contact1 from './components/Pages/NestedPages/Contact1';
import Contact2 from './components/Pages/NestedPages/Contact2';
import Page404 from './components/Page404';
import DummyContact from './components/Pages/DummyContact';
import Login from './components/Pages/Login';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  let [islogin, setislogin] = useState(false)
  useEffect(() => {
    islogin = JSON.parse(localStorage.getItem('islogin'))
    setislogin(islogin)
    localStorage.setItem('islogin', JSON.stringify(islogin))
  }, [])

  return (
    <div className="">
      {console.log(islogin)}
      <BrowserRouter>
        <Routes>
          {islogin ?
            <>
              <Route path='/' element={<Navigate to={'/home'} />} />
              <Route path='/login' element={<Navigate to={'/home'} />} />
            </>
            :
            <>
              <Route path='/' element={<Navigate to={'/login'} />} />
              <Route path='/home' element={<Navigate to={'/login'} />} />
            </>
          }
          <Route path='/home' element={<Home setislogin={setislogin} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<DummyContact />} >
            <Route path='' element={<Contact />} />
            <Route path='contact1' element={<Contact1 />} />
            <Route path='contact2' element={<Contact2 />} />
          </Route>
          <Route path='*' element={<Page404 />} />
          <Route path='/login' element={<Login setislogin={setislogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
