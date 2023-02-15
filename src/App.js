import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Header from './components/Header'
import Login from './components/Login'
import NotFound from './components/NotFound'

import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/notfound' element={<NotFound/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
