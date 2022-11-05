import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from "react-redux"
import {updateuser} from "../Actionfolder/Firstaction"
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../firebase/Firebaseconfig"

 class EditUsers extends Component {
  constructor (props){
    super(props)
    this.state={
      name: props.userdata.name,
      email: props.userdata.email,
      gen: props.userdata.gen,
      id: props.userdata.id
    }
  }
  handleinput =(e)=>{
    e.preventDefault()
    
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log (this.state)

  }
  handleSubmit =async(e)=>{
    e.preventDefault()
    let edituser =(this.state.id, this.state)
    const editinguser = doc(db, "new-users", this.state.id);


await updateDoc(editinguser, edituser);
    // this.props.updateuser({id:this.state.id, name:this.state.name, email:this.state.email, gen:this.state.gen})

 

    this.setState({
    name:"",
    email:"",
    gen:"",
  });
  this.props.close()
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
        <Form.Control type="text" placeholder="Enter email" 
        value={this.state.email} 
        name="email" 
        onChange={this.handleinput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="text" placeholder="Enter gen" 
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
  updateuser
}
export default connect (null, mapDispatchToProps) (EditUsers);