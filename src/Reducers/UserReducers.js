
let mystate = {users:[
   
]}


let UserReducers =(state=mystate, action)=>{

    switch (action.type){
     case "Submit-New-User":
     return {...state, users:action.payload}

     case "Delete-User":
     const undeleteduserrs = state.users.filter((user)=>user.id !== action.payload)
      return {...state, users:undeleteduserrs}

      
     case "Users-Update":
      const editusers = state.users.map((user)=>{
        if (user.id === action.payload.updatedinfo.id){
          return action.payload.updatedinfo
         
        }
        else {return user}
      })
      return {...state, user:editusers}

     default: return state
    }

    
}

export default UserReducers
