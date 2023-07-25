import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComp = ({product, deleteHandler, editHandler}) => {
  return (
    <>
     <Card style={{ width: '20rem', height: '500px'}} className='mt-4 bg-info mb-3'>
      <Card.Img variant="top" src={product.thumbnail} className='w-100 h-75' />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description.length>10?product.description.slice(0,30)+"...":product.description}
        </Card.Text>
        <Button className='btn btn-warning me-3 px-4' onClick={(e)=>editHandler(product)}>Edit</Button>
        <Button className='btn btn-danger' onClick={(e)=>deleteHandler(product.id)}>Delete</Button>
      </Card.Body>
    </Card>
    </>
  )
} 

export default CardComp;