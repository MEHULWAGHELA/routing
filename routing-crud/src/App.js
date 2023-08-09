import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Form from './components/pages/Form';
import TableComponent from './components/pages/TableComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/' element={<Navigate to={'/form'} />} />
          <Route path='/table' element={<TableComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
