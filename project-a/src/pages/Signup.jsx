import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

const Signup = () => {
  const [fullName, setFullName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  


  const submitHandlerSignup=async(e)=>{
    e.preventDefault();
    let data={
      email,
      password
    }
    const resp=await fetch("http://localhost:8085/users/register",{
    method:'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json' 
   }
  });
  const response=resp.json();
  console.log((response));


  }
  return (
  <>
   
   <Card>
    <Form onSubmit={submitHandlerSignup}> 
    <Form.Group className="mb-3" controlId="fullname">
        <Form.Label>FullName</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setFullName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
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

export default Signup