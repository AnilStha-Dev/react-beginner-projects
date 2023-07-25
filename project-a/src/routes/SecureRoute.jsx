import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const SecureRoute = () => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  return (
    <>
    {isLoggedIn ? <Outlet/>: <Navigate to="/"/>}
    </>
  )
}

export default SecureRoute