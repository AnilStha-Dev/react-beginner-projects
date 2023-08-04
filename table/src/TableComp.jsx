import React from 'react'
import Table from 'react-bootstrap/Table';


const TableComp = ({header,users}) => {
  //header = array of object keys


  //rendering function of object inside values
  const renderObjectCellData=(item)=>{

    //keyHead stores array of keys
    const keyHead=Object.keys(item);
    console.log(keyHead)
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
            return <td key={index}>{typeof item[head]==="object"?renderObjectCellData(item[head]):item[head]}</td>
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
            return <td key={index}>{head.toUpperCase()}</td>
          })}
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>{
          //users=array of objects
          //user  individual objects
            return <tr key={index}>
                {header.map((head,index)=>{
                    return <td key={index}> {typeof user[head]==="object"?renderObjectCellData(user[head]):user[head]} </td>
                })}
            </tr>
        })}
      </tbody>
    </Table>
  )
}

export default TableComp
