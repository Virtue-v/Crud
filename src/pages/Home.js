import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button} from 'react-bootstrap';
import AddUserform from '../Components/AddUserform';
import Users from '../Components/Users';
import {signOut} from "firebase/auth";
import {auth} from "../firebase/Firebaseconfig"



function Home() {

  const SignOut = async (e)=>{
    e.preventDefault ()
    try {signOut(auth)} catch(e) {console.log (e)}
    
    
    };
  
  return (
    <>
      <Container fluid>
      <Row>
       <Col md="4">
        <AddUserform />
        </Col> 
       <Col>
       <Users />
       </Col> 
      </Row>
      </Container>
      <button onClick={SignOut} variant="danger" style={{backgroundColor: "red", color: "white", fontWeight: "bolder"}}>logout</button>


    </>
  )
}

export default Home