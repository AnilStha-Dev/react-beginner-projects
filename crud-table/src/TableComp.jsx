import React from 'react';
import Table from 'react-bootstrap/Table';

const TableComp = ({header, users,deleteHandler}) => {
  //header is array of keys
  // users has array of objects

  const renderCellDataObject=(item)=>{
     //keyHead stores array of keys
     const keyHead=Object.keys(item);
     //item is object
    return <>
     <Table striped bordered hover>
      <thead>
        <tr>
           {keyHead.map((key,index)=>{
            return <th key={index}>{key}</th>
           })}
        
        </tr>
      </thead>
      <tbody>
        <tr>
          {keyHead.map((head,index)=>{
            return <td key={index}>{typeof item[head]==="object"?renderCellDataObject(item[head]):item[head]}</td>
          })}

        </tr>
      </tbody>
    </Table>
    </>
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {header.map((head,index)=>{
            return <th key={index}>{head.toUpperCase()}</th>
          })}
             <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index)=>{
          return <tr key={index}>
            {header.map((key,index)=>{
            return <td key={index}>{typeof user[key]==="object"?renderCellDataObject(user[key]):user[key]}</td>
          })}
          <td>
          <button className='btn btn-primary mb-4 mt-3'>Edit</button>
          <button className='btn btn-danger' onClick={(e)=>deleteHandler(user.id)}>Del</button></td>
          </tr>

        })}
      </tbody>
    </Table>
  )
}

export default TableComp