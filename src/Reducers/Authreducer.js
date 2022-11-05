let initial = {
    login: null
}

const Authreducer =(state=initial, action)=>{
switch(action.type){
case "add-user":
return {...state, login: action.payload}

default : return state
}
}


export default Authreducer;