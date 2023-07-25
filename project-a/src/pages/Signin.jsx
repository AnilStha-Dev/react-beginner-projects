import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { successToast } from '../services/toastify.service.jsx';



const Signin = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    // react hooks
    const navigate = useNavigate();
    


const submitHandler=async(e)=>{
    e.preventDefault();
    let data={email,password};
    const resp=await fetch("http://localhost:8085/users/login",{
      method:'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": 'application/json' 
     }
    });
    const response=await resp.json();
    console.log((response.status));
    if (response.status){
    navigate('/Home');
    successToast(response.message);
    sessionStorage.setItem("isLoggedIn",true);

    }

}

  return ( <>
  
  <Card className='bg-info '>
    <h1 >Login Form</h1>
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className=''>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
    

    </>
  )
}

export default Signin;      