import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import Users from './Components/Users';

import { Component } from 'react';
import AddUserform from './Components/AddUserform';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
    Users: [
      {
        name: "Val",
        email: "Val@yahoo.com",
        gen: "20",
        id:"gghghgh8000"
      },

      {
        name: "Chuks",
        email: "Chuks@yahoo.com",
        gen: "25",
        id:"gghghg980i99"

      },

      {
        name: "Irene",
        email: "Irene@yahoo.com",
        gen: "24",
        id:"0009980i9kjjj9"

      }

    ]
    }
  }

  AddNewuser = (user)=>{
    user.id = Math.random().toString()
    this.setState({
      Users:[...this.state.Users, user]
    })
    console.log (user)
  }

  removeUser =(id)=>{
let listedUsers = this.state.Users.filter(user => user.id !==id)
this.setState({

  Users: listedUsers
})
  }

  edituser = (id, updatedinfo) =>{
    this.setState({
      Users: this.state.Users.map (User => User.id === id ? updatedinfo : User)
    })
  }
  render(){
  return (
    <>
      <Container fluid>
      <Row>
       <Col md="4">
        <AddUserform adduser={this.AddNewuser}/>
        </Col> 
       <Col>
       <Users userdata={this.state.Users} removeUser={this.removeUser} edituser={this.edituser}/>
       </Col> 
      </Row>
      </Container>
      
    </>
  );
}
}

export default App;
