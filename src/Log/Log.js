import { AuthUserContext } from "../session";
import { useContext } from "react";
import axios from "axios";



axios.defaults.baseURL ='http://15.164.251.155';


const UserLog = (authUser, page, detail) => {
    console.log("user: ", authUser)

    axios.get('/profile_full/?user=' + authUser.user_uid)
    .then((res)=> (console.log(res.data.nickname)))
    .catch((error)=>console.log(error))
/*
    axios.post('/log/', {
        user: authUser.id,
        user_id: authUser.user_id,
        user_uid: authUser.user_uid,
        page: page,
        detail: detail,
    })
    .then((response) => (console.log(response)))
    .catch((error) => console.log(error))*/
}

const VisitorLog = (page, detail) => {
     axios.post('/log/', {
        page: page,
        detail: detail,
     })
     .then( (response) => (console.log(response)))
     .catch((error)=>console.log(error))
}


export const Log = (page, detail) => {
    const context = useContext(AuthUserContext) 
    
  
    if(context === null){
        console.log("visitor")
        VisitorLog(page, detail)
     } else {
        console.log("user")
        UserLog(context, page, detail)
     }
}