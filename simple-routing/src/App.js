import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* To use routing we have to install react-router-dom by npm i react-router-dom   */
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Service' element={<Service />} >
            <Route path=':number' />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
