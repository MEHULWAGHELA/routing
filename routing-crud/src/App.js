import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Table from './components/pages/Table';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
