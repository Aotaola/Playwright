import React from "react";
import Selection from "./selection";
// import NavBar from "./navBar";
 import ProfileCard from "./profilecard";
import { useEffect, useState } from "react";

const Profile = ({user, text}) => {
     


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
         <br/>
         <h4>library</h4>
         <br></br>
         {/* <div>{saved}</div> */}
         <Selection text={text} style={{ display: "inline-block" }}/>
        </div>
     );
}
 
export default Profile;