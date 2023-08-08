import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Contact1 from './components/Pages/NestedPages/Contact1';
import Contact2 from './components/Pages/NestedPages/Contact2';
import Page404 from './components/Page404';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Navigate to='/about' />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} >
            <Route path='contact1' element={<Contact1 />} />
            <Route path='contact2' element={<Contact2 />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
