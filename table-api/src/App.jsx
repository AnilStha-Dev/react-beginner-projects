import React, { useState } from "react";
import axios from "axios"
import TableComp from "./TableComp";

function App() {
  const [prods, setProducts]=useState([]);
  const getData = async () => {
    const response = await axios.get(
      'https://dummyjson.com/products'
    );
    setProducts(response.data.products);
  };
  getData();



  return (
    <>
    {prods.map((products)=>{
      return <TableComp key={products.id} products={products}/>
    })}
    
    </>
  )
}

export default App
