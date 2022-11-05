import React from 'react'
import {connect} from "react-redux"
import {Navigate} from "react-router-dom"

function Protectedroute({children, authusers}) {
  
    if (!authusers) return <Navigate to="/login" replace={true}/>
    return children
  
}

const mapStateToProps =(state)=>{
return{
    authusers:state.Authreducer.login
}
}
export default  connect (mapStateToProps)(Protectedroute);