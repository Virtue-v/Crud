import React from 'react'
import { Container, Row,} from 'react-bootstrap';
import Allusers from './Allusers'; 
import {connect} from "react-redux"


function Users(props) {
  return (
    <Container>
        <Row>
        {
            props.connectstate.map((info) => {
                return <Allusers 
                    userinfo={info} 
                    key={info.id} 
                    removeUser={props.removeUser}
                    edituser={props.edituser}/>

                
            })

        }


         </Row>
    </Container>
  )
}
const mapStateToProps = (state) => { 

  return {
    connectstate: state.users
  }
} 
export default connect (mapStateToProps) (Users)