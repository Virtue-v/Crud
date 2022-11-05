export const actionuser =(AddedUser)=>{
    return {
        type: "Submit-New-User",
        payload: AddedUser
    }
}

export const deletebutton =(id) =>{
    return {
        type: "Delete-User",
        payload: id
    }
}

export const updateuser =(updatedinfo) =>{
    return {
        type: "Users-Update",
        payload:{updatedinfo}
    }
}