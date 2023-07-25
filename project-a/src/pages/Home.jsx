import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate=useNavigate();
  function logoutHandler(){
    navigate("/")
  }
  return (
    <>
    <div>This is my Home landing page</div>
    <button className='btn btn-warning' onClick={logoutHandler}>Logout</button>
    </>
    
  )
}

export default Home