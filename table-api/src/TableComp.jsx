import Table from 'react-bootstrap/Table';
import React from 'react'

const TableComp = ({products}) => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>title</th>
        <th>Description</th>
        <th>Discount Percentage</th>
        <th>Rating</th>
        <th>Stock</th>
        <th>Brand</th>
        <th>Category</th>
        <th>Thumbnail</th>
        <th>Images</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>{products.id}</td>
        <td>{products.title}</td>
        <td>{products.description}</td>
        <td>{products.discountPercentage}</td>
        <td>{products.rating}</td>
        <td>{products.stock}</td>
        <td>{products.brand}</td>
        <td>{products.category}</td>
        <td>{products.thumbnail}</td>
        <td>{products.images}</td>
      </tr>
    </tbody>
  </Table>
  )
}

export default TableComp