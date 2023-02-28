import React from "react";
import Selection from "./selection";
import { useEffect, useState } from "react";

const Profile = () => {
     const [user, setUser] = useState("");
    const renderUser = async() => {
        let req = await fetch("/users/1")
        let res = await req.json()
        console.log(res)
        setUser(res)}

        useEffect(()=>{
            renderUser()
        },[]) 
    return ( 
         <>
         <h1>{user.username}</h1>
         <img src={user.avatar} style={{ width: '400px', height: '300px' }} />
         <h2>{user.name}</h2>
         <h3> {user.bio}</h3>
         <h4> list of stuff </h4>
         <br></br>
         <Selection/>
        </>
     );
}
 
export default Profile;