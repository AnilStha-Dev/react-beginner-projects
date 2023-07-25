
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';  

const AddModel = ({modal, closeHandler, addproductHandler, setImage, setTitle, setDescription,modalTitle,edit,editProd,editFormHandler,onChangeHandler}) => {
  
  return (
    <Modal show={modal} >
        <Modal.Header >
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={  //on change ma set gareko value ra value= ma rakheko vvalue same vaena vane we cannot edit form
          (e)=>{onChangeHandler(e);
          setImage(e.target.value)}}
         value={editProd.thumbnail}
         name='thumbnail' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
          onChangeHandler(e);
          setTitle(e.target.value)}} value={editProd.title}
          name='title' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=>{
          onChangeHandler(e);
          setDescription(e.target.value)}} 
          value={ editProd.description}
          name="description"/>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeHandler} >
            Close
          </Button>
          <Button variant="primary" onClick={edit?editFormHandler:addproductHandler} >
            {edit?"Edit-Product":"Add-product"}
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default AddModel