import React, { useState, useEffect } from 'react';

const ProfileCard = ({user}) => {

    const [saved, setSaved] = useState("");

const fetchUserDocs = async () => {
     const req = await fetch(`/user_docs/`);
     const res = await req.json();
     console.log(res)
     setSaved(res)}

useEffect(() => {
     fetchUserDocs();
},[])
const profile = user.id
      console.log(saved.profile)

    return ( 
        <div className = "profile-card-div">
        <h1>{user?.username} </h1>
         <img src={user?.avatar} style={{ width: '400px', height: '300px' }} alt="User Profile"/>
         <h2>{user?.name}</h2>
         <h3> {user?.bio}</h3>
         <p>{user?.saved}</p>
        </div>
     );
}
 
export default ProfileCard;