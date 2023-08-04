
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import SecureRoute from './routes/SecureRoute';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<SecureRoute/>}>
        <Route path='/Home' element={<Home/>}/>
        </Route>
      </Routes>
      <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
