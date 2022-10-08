import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { connect} from 'react-redux';
import { deletebutton} from "../Actionfolder/Firstaction"

import EditUsers from './EditUsers';

const Allusers = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete =(e)=> {
        e.preventDefault();
    props.deletebutton(props.userinfo.id);

    }
    return (
            <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditUsers userdata={props.userinfo} edituser={props.edituser}  close={handleClose} /></Modal.Body> 
      </Modal>

            <Col md="3">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Students</Card.Title>
                    <Card.Text>
                        <p>Name:{props.userinfo.name}</p>
                        <p>Email:{props.userinfo.email}</p>
                       <p> Gen:{props.userinfo.gen}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Edit</Button>
                    <Button variant="primary" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
            </Col>
            </>
    
    );
}

const mapDispatchToProps ={
    deletebutton: deletebutton 
}
export default connect (null, mapDispatchToProps) (Allusers);
