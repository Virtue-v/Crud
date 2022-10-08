import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {actionuser} from "../Actionfolder/Firstaction"
import {connect} from "react-redux"
import { v4 as uuid} from 'uuid';

 class AddUserform extends Component {
  constructor (props){
    super()
    this.state={
      name:"",
      email:"",
      gen:""
    }
  }
  handleinput =(e)=>{
    e.preventDefault()
    this.setState({
      [e.target.name] : e.target.value
    })
    // console.log (this.state)

  }
  handleSubmit =(e)=>{
    e.preventDefault()
    // this.props.edituser(this.state.id, this.state)
    this.props.actionuser({id:uuid(), name:this.state.name, email:this.state.email, gen:this.state.gen})
    
    this.setState({
    name:"",
    email:"",
    gen:"",
  });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"  
        value={this.state.name} 
        name="name" 
        onChange={this.handleinput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={this.state.email} 
        name="email" 
        onChange={this.handleinput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="number" placeholder="Enter gen" 
         value={this.state.gen} 
        name="gen" 
        onChange={this.handleinput}  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
  }
}
const mapDispatchToProps ={
  actionuser: actionuser
}
export default connect (null, mapDispatchToProps) (AddUserform)