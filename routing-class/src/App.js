import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/form' element={<FormComponent />}>
            <Route path=':formpara' />
          </Route>
          <Route path='/' element={<Navigate to={'/form'} />} />
          <Route path='/table' element={<TableComponent />}>
            <Route path=':tablepara' />☻
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
