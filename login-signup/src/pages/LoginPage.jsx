import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { successToast } from './Toastify.service';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submitHandler=async(e)=>{
        e.preventDefault();
        let data={email,
        password}
        const SERVER_URL=import.meta.env.VITE_SERVER_URL;
        //axios post
        try {
            const response = await axios.post(`${SERVER_URL}/users/login`, data);
            console.log(response);
            if(response.data.status){
                navigate("/Home")
                successToast(response.data.message);
                sessionStorage.setItem("isLoggedIn",true);
            }
          } catch (error) {
            console.log(error);
          }

    }
  return (
    <Card className='bg-info'>
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
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
  )
}

export default LoginPage