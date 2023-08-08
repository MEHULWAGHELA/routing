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

/* in nested routing main point is we dont have to use '/'
for nested routing make route in route and give path 'contact1' like this
to open contact1 page
localhost:3000/contact/contact1  .. we can access this neted page like this
but in this contact and contact1 both page show thats why we have to make Contact page blank
and in nested path '' blank and that place we use original contact page and below them another page make therefore only one page show that time.
But for nested routing we have to use  >Outlet/> in parent component 
if we not use <Outlet> in parent component then nested page doesnot show 
and that nested component show according to postion of outlet we use in parent component if we make parent component first and bottom side Outlet use then  then child component show bottom side of parent component 
thats why we have to use <Outlet> only in parent component and make original component in nested*/

/* Navigate use for path change during starting of page
in this example we write path'/' and in that we navigate to page about then  it take to about page during starting of project but we have that path like below we have make path of '/about' then we can naviagate*/

/* '*' it means universal path if we write any wrong path then we redirect to that page we write on universal path
in this exaample we have make 404 page  */
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Navigate to='/about' />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<DummyContact />} >
            <Route path='' element={<Contact />} />
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
