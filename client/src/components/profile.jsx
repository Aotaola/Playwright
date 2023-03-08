import React from "react";
//import Selection from "./selection";
import ProfileCard from "./profilecard";
import Library from "./Library";
import { useEffect, useState } from "react";

const Profile = ({user}) => {
     
const [userDocuments, setUserDocuments] = useState([]);

useEffect((id) => {
     const fetchUserWithDocs = async () => {
          const req = await fetch(`/users/${id}`)
          const res = await req.json()
          setUserDocuments(res.docs)
          //console.log(res)

     }
     fetchUserWithDocs()
},[])
     
     
     
return ( 
     <div>
     <br></br>
     <div>
     {user ?(
          <ProfileCard key = {user.id} user={user}/>
          ):(
          null
          )}
     </div>
     <br></br>
     <Library  key={userDocuments.id} userDocuments={userDocuments}/>
     </div>
     );
}
 
export default Profile;