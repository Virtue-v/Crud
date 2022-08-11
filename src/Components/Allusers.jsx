import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col,Text,Title} from 'react-bootstrap'

const Allusers = (props) => {
    return (
    
            <Col md="3">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Students</Card.Title>
                    <Card.Text>
                        <p>Name:{props.userinfo.name}</p>
                        <p>Email:{props.userinfo.Email}</p>
                       <p> Age:{props.userinfo.Age}</p>
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                    <Button variant="primary">Delete</Button>
                </Card.Body>
            </Card>

            </Col>
    
    );
}

export default Allusers;
