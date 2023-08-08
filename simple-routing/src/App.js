import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* To use routing we have to install react-router-dom by npm i react-router-dom
then use BrowserRouter at that component in which we call that component which we want to route
then structure like below '/' when we run project that time this page open
'/about' means if we write locahost:3000/about then we can see only about page like this..
if we want to change path by click then we have two method
1=> anchor tag
2=> Link component

1=> if we use anchor tag then it is refresh page during click therefore we have to use link
   example <a href='/about'  />
2=> by Link component it is not refresh page  
<Link to={'/'} target='_blank'>Home</Link>
target blank open page in new tab
 
if we want to send parameter during page open then we have to make nested path and during call we can pass anything
we can pass name . by using this we can make dynamic page like..
 wecome mehul waghela on page we want to show then we have pass that name during click   
 <Link to={'/Service/1234'}>Service</Link>
 
 
 and we can access parameter by react-roter-dom hook useParams
 
 let params = useParams()
    console.log(params)
    return (
        <div>
            Service
            {params.number}
        </div>
    )
    /* by this page become totally dynamc */
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
