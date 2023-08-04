import { useEffect, useState } from 'react'
import TableComp from './TableComp'
import axios from "axios"

function App() {
  const [users, setUsers]=useState([]);
  const [header,setHeader]=useState([]  );
  
  // const [count, setCount] = useState(0)
  // // Three types of use Effect

  // // runs at beginnning when browser renders and on every state change
  // useEffect(()=>{
  //   console.log("everytime");
  // });

  // // only runs at the beginning when browser first renders
  // useEffect(()=>{
  //   console.log("only one time");
  // },[]);

  // //runs when count state is changed and on first page load
  // useEffect(()=>{
  //   console.log("when value changes");
  // },[count]);

  //Api Call
  const getApi=async()=>{
    const {data}=await axios.get(`${import.meta.env.VITE_SERVER_URL}/users`);
    setUsers(data.users);
    setHeader(Object.keys(data.users[0]));
  }
  //use effect for api
  useEffect(()=>{
    getApi();
  },[]);  
 
  return (
    <>
      <TableComp users={users} header={header}/>
    </>
  )
}

export default App
