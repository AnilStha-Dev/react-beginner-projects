import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [fullName,setfullName]=useState("");

    const submitHandler=async(e)=>{
        e.preventDefault();
        let data={fullName,email,
        password}
        const SERVER_URL=import.meta.env.VITE_SERVER_URL;
        //axios post
        try {
            const response = await axios.post(`${SERVER_URL}/users/register`, data);
            console.log(response);
            if(response.data.status){
                navigate("/")
            }
          } catch (error) {
            console.log(error);
          }

    }
  return (
    <Card className='bg-info'>
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="fullName">
      <Form.Label>fullName</Form.Label>
      <Form.Control type="text" placeholder="FullName" onChange={(e)=>setfullName(e.target.value)} />
    </Form.Group>
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

export default Signup;