import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import Users from './Components/Users';
import Allusers from './Components/Allusers';
import { Component } from 'react';
import AddUserform from './Components/AddUserform';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
    Users: [
      {
        Name: "Val",
        Email: "Val@yahoo.com",
        Age: "20"
      },

      {
        Name: "Chuks",
        Email: "Chuks@yahoo.com",
        Age: "25"
      },

      {
        Name: "Irene",
        Email: "Irene@yahoo.com",
        Age: "24"
      }

    ]
    }
  }

  AddNewuser = (user)=>{
    this.setState({
      Users:[...this.state.Users, user]

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
       <Users userdata={this.state.Users}/>
       </Col> 
      </Row>
      </Container>
      
    </>
  );
}
}

export default App;
