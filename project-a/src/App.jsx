import React from 'react';
import './App.css'
import Counter from './components/Counter';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NoPageFound from './pages/NoPageFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import SecureRoute from './routes/SecureRoute';

const App=()=>{
  return <div> 
    <Routes>
    <Route path="/" element={<Signin/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="" element={<SecureRoute/>}>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/counter" element={<Counter/>}/>
    </Route>
    <Route path="*" element={<NoPageFound/>}/>
    
    
    </Routes>
    <ToastContainer />
   
  </div>
}
export default App
