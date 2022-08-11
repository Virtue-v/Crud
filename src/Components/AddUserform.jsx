import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 class AddUserform extends Component {
  constructor (){
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
    console.log (this.state)

  }
  handleSubmit =(e)=>{
    e.preventDefault()
    this.props.adduser(this.state)

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
        <Form.Control type="number" placeholder="Enter Gen" 
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
export default AddUserform