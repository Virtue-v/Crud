
import './App.css'
import { useEffect } from 'react'
import { collection, query, onSnapshot, orderBy} from "firebase/firestore"
import {db, auth} from "./firebase/Firebaseconfig"
import {actionuser} from "./Actionfolder/Firstaction"
import {useDispatch} from "react-redux"
import Routing from "./Routing"
import {loginuser} from "./Actionfolder/Authaction"
import {onAuthStateChanged} from "firebase/auth"
import {connect} from "react-redux"

function App ({loginuser}) {
const dispatch = useDispatch ()
useEffect(()=>{
  const readData =  async()=>{
    const q = await  query(collection(db, "new-users"), orderBy("name", "asc"));
     onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
          users.push(doc.data());
      }); dispatch (actionuser(users))
        console.log(users);
    });

  }
  readData();
}, [dispatch]);


useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
    if (user) loginuser (user)
    else loginuser (null)
  })

},[loginuser]);

    return (
      <>
      <Routing/>
      </>
    )
  }


  const mapDispatchToProps = {
    loginuser:loginuser
  }

export default connect (null, mapDispatchToProps) (App)
