import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function logoutHandler(){
    sessionStorage.setItem("isLoggedIn",false);
    navigate("/")
  }
  return (
    <>
    <div>This is HomePage</div>
    <button className='btn btn-warning' onClick={logoutHandler}>Logout</button>
    </>
  )
} 

export default Home