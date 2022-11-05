import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/Firebaseconfig"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useNavigate} from  "react-router-dom"


function Register() {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate ()

   const handleRegister = async(e)=>{
        e.preventDefault()
        try {  const user = await createUserWithEmailAndPassword(auth, email, password)
          navigate ("/login", {repalce:true})
            console.log (user)
            
        } catch (error) {
            
        }
        setEmail ("")
        setPassword ("")
    }

    const handleClick = async(e)=>{
      e.preventDefault()
      
      try {  
        const user = await signInWithPopup (auth, provider)
          console.log (user)
          
      } catch (error) {
          
      }
      setEmail ("")
      setPassword ("")
    }
  return (
    <div>
        <Form style={{width: "20rem"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
        onChange={(e)=>setEmail (e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
        onChange={(e)=>setPassword (e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit" style={{backgroundColor: "red", color: "white", fontWeight: "bolder"}} onClick={handleRegister}>Sign Up</Button>
      <img onClick={handleClick} src='images/icons8-google-48.jpg' alt=''/>
      
    </Form>
    </div>
  )
}

export default Register