import React from 'react'
import { Container, Row,} from 'react-bootstrap';
import Allusers from './Allusers'; 

function Users(props) {
  return (
    <Container>
        <Row>
        {
            props.userdata.map((info, index) => {
                return (
                    <Allusers userinfo={info} key={index}/>
                )
            })
        }
       

         </Row>
    </Container>
  )
}
export default Users